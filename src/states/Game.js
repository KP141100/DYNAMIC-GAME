export default class Game { //export or defines a 'Game' class that contains all logic
  constructor() { // initializes variables for game phases, score, elements and card management
    this.score = 95000;//game starts with score of 95000
    this.displayedScore = 95000; //for smooth animation of score
    this.timerStarted = false;//tracks whether timer has started or not
    this.hand = null;//hand is the pointer sprite 
    this.handRepeatTimer = null;      // already exists
    this.handFrameIndex = 0;//handFrameIndex tracks its current frame
    this.handPausedUntilNextClick = false;
    this.fullFlow = ["diamonds8", "heart7", "clubs6", "wildCard","heart3", "spades2_left", "diamondsA", "spades2_right"];//flow of cards that needs to be followed by the player 
    this.alternatePathChosen = false;//track which path player chooses
    this.awaitingPostWildcardClick = false;
    this.postWildcardPhase = false;
    this.postWildcardFlow = [];          // stores the 3 card choices after wildcard
    this.lastPostWildcardColor = null;  // tracks last color clicked in wildcard phase
    this.handStep = 0;//tracks current index in fullFlow
    this.counter = 10;//countdown from 10 seconds
    this.timerText = null;//text showing countdown
    this.bomb = null;//bomb image that fades on timeOut
    this.timerEvent = null;//timerloop reference for clearing
    this.flippedCards = new Set();//Track flipped card
    this.streakIcons = [];//to hold references to overlay 4 icons
    this.cardSprites = {}; //stores references to all card sprites
    this.tapSequenceEvents = [];      // NEW: stores tap timers so we can cancel them
    this.layouts = null; // will be set in create()
  }

  

  create () {
    const centerX = this.world.centerX;

  this.layouts = {
      portrait: {
        logo: { x: centerX - 190, y: 40 },
        scorePanel: { x: 10, y: 300 },
        streak: { x: centerX + 180, y: 300 },
        topCards: [
          { key: "heart3", x: centerX - 180, y: 630, angle: 15 },
          { key: "diamondsA", x: centerX + 180, y: 630, angle: -15 },
          { key: "wildCard", x: centerX, y: 620, angle: 0 }
        ],
        phase2: [
          { key: "spades2_left", x: centerX - 303, y: 1090, angle: 15 },
          { key: "spades2_right", x: centerX + 303, y: 1090, angle: -15 }
        ],
        phase1: [
          { key: "diamonds8", x: centerX - 242, y: 860, angle: 15 },
          { key: "heart7", x: centerX, y: 855, angle: 0 },
          { key: "clubs6", x: centerX + 242, y: 860, angle: -15 }
        ],
        bomb: { x: centerX + 70, y: 950 },
        talon: { x: centerX, y: 1726 },
        activeCard: { x: centerX, y: 1726 }
      },
      landscape: {
        logo: { x: centerX - 350, y: 20 },
        scorePanel: { x: 20, y: 150 },
        streak: { x: centerX + 350, y: 150 },
        topCards: [
          { key: "heart3", x: centerX - 300, y: 400, angle: 15 },
          { key: "diamondsA", x: centerX + 300, y: 400, angle: -15 },
          { key: "wildCard", x: centerX, y: 380, angle: 0 }
        ],
        phase2: [
          { key: "spades2_left", x: centerX - 400, y: 700, angle: 15 },
          { key: "spades2_right", x: centerX + 400, y: 700, angle: -15 }
        ],
        phase1: [
          { key: "diamonds8", x: centerX - 320, y: 550, angle: 15 },
          { key: "heart7", x: centerX, y: 540, angle: 0 },
          { key: "clubs6", x: centerX + 320, y: 550, angle: -15 }
        ],
        bomb: { x: centerX + 200, y: 600 },
        talon: { x: centerX, y: 1000 },
        activeCard: { x: centerX, y: 1000 }
      }
    };
          // NEW: stores tap timers so we can cancel them
    //Background
    this.add.sprite(0, 0, "background").scale.setTo(1.0);

    // Logo
    this.logo = this.add.sprite(centerX - 190, 40, "logo");
    this.logo.scale.setTo(1.3);

    // Score Panel
    this.scorePanel = this.add.sprite(10, 300, "hudPanel");
    this.scorePanel.scale.setTo(1.3);
    this.scorePanel.anchor.set(0, 0);
    const panelWidth = this.scorePanel.width;
    const panelHeight = this.scorePanel.height;
    this.scoreText = this.add.text(0, 0, this.displayedScore.toLocaleString(), {
      font: "bold 50px semibold",
      fill: "#a14218"
    });
    this.scoreText.anchor.set(0.7);
    this.scoreText.x = this.scorePanel.x + panelWidth / 2 + 55;
    this.scoreText.y = this.scorePanel.y + panelHeight / 2 + 5;

    // Streak Meter
    this.streak = this.add.sprite(centerX + 180, 300, "hudStreak");
    this.streak.scale.setTo(1.3);
    const iconSpacing = 72;
    const startX = this.streak.x + 70;
    const startY = this.streak.y + 55;
    [
      { x: startX, y: startY },
      { x: startX + iconSpacing, y: startY },
      { x: startX + iconSpacing * 2, y: startY },
      { x: startX + iconSpacing * 3, y: startY }
    ].forEach(pos => {
      const icon = this.add.sprite(pos.x, pos.y, null);
      icon.anchor.set(0.5);
      icon.scale.setTo(1.1);
      icon.visible = false;
      this.streakIcons.push(icon);
    });

    // Cards
    [
      { key: "heart3", x: centerX - 180, y: 630, angle: 15 },
      { key: "diamondsA", x: centerX + 180, y: 630, angle: -15 },
      { key: "wildCard", x: centerX, y: 620, angle: 0 }
    ].forEach(card => this.addCard(card.key, card.x, card.y, card.angle));

    [
      { key: "spades2_left", x: centerX - 303, y: 1090, angle: 15 },
      { key: "spades2_right", x: centerX + 303, y: 1090, angle: -15 }
    ].forEach(card => this.addCard(card.key, card.x, card.y, card.angle));

    [
      { key: "diamonds8", x: centerX - 242, y: 860, angle: 15 },
      { key: "heart7", x: centerX, y: 855, angle: 0 },
      { key: "clubs6", x: centerX + 242, y: 860, angle: -15 }
    ].forEach(card => this.addCard(card.key, card.x, card.y, card.angle));
    this.flippedCards.add("heart7");

    // Bomb
    this.bomb = this.add.sprite(centerX + 70, 950, "000");
    this.bomb.anchor.set(0.5);
    this.bomb.angle = 30;
    this.bomb.scale.setTo(0.9);

    // Talon Outline
    this.talonOutline = this.add.sprite(centerX, 1726, "talon");
    this.talonOutline.anchor.set(0.5);
    this.talonOutline.scale.setTo(2.2);

    // Active Card
    this.activeCard = this.add.sprite(centerX, 1726, "heart7");
    this.activeCard.anchor.set(0.5);
    this.activeCard.scale.setTo(0.9);

    // Set inputs
    this.setCardInput();

    // Hand
    this.hand = this.add.sprite(-100, -100, "h000");
    this.hand.anchor.set(0.5);
    this.hand.scale.setTo(0.7);

    // Music
    this.music = this.add.audio("bgMusic");
    this.music.loop = true;
    this.music.play();

    // Orientation handling using real window resize
    this.applyLayout(this.isPortrait() ? this.layouts.portrait : this.layouts.landscape);
    window.addEventListener('resize', () => {
      const layout = this.isPortrait() ? this.layouts.portrait : this.layouts.landscape;
      this.applyLayout(layout);
    });

    this.moveHandToNextInFlow();
  }

  isPortrait() {
    return window.innerHeight > window.innerWidth;
  }

  applyLayout(layout) {

    if (this.logo) { 
      this.logo.x = layout.logo.x; 
      this.logo.y = layout.logo.y; 
    }
    if (this.scorePanel) { 
      this.scorePanel.x = layout.scorePanel.x; 
      this.scorePanel.y = layout.scorePanel.y; 
    }
    if (this.streak) { 
      this.streak.x = layout.streak.x; 
      this.streak.y = layout.streak.y; 
    }

    layout.topCards.forEach(c => {
      const card = this.cardSprites[c.key];
      if (card) { 
        card.x = c.x; 
        card.y = c.y; 
        card.angle = c.angle; 
      }
    });
    layout.phase2.forEach(c => {
      const card = this.cardSprites[c.key];
      if (card) { 
        card.x = c.x; 
        card.y = c.y; 
        card.angle = c.angle; 
      }
    });
    layout.phase1.forEach(c => {
      const card = this.cardSprites[c.key];
      if (card) { 
        card.x = c.x; 
        card.y = c.y; 
        card.angle = c.angle; 
      }
    });

    if (this.bomb) { 
      this.bomb.x = layout.bomb.x; 
      this.bomb.y = layout.bomb.y; 
    }
    if (this.talonOutline) { 
      this.talonOutline.x = layout.talon.x; 
      this.talonOutline.y = layout.talon.y; 
    }
    if (this.activeCard) { 
      this.activeCard.x = layout.activeCard.x; 
      this.activeCard.y = layout.activeCard.y; 
    }
  }

  moveHandToNextInFlow() { //move hand to first card according to fullFlow  
    const nextKey = this.fullFlow[this.handStep];
      console.log("Moving to next in flow:", nextKey, "handStep:", this.handStep);
      if (!nextKey) return;//stop if there is no next card

      this.revealNextCard(nextKey);  
      this.moveHandToCard(nextKey);
      
 }
  //add card on the screen at a given position with angle
  addCard(key, x, y, angle = 0) {
    const sprite = this.add.sprite(x, y, key);
    sprite.anchor.set(0.5);
    sprite.angle = angle;
    sprite.scale.setTo(0.87, 0.87);

    const shouldBeVisible = ['diamonds8', 'heart7', 'clubs6', 'wildCard'].includes(key);//cards which have their front face shown up
    sprite.visible = shouldBeVisible;
    //hides the actual card by replacing it with a cardback
    if (!shouldBeVisible) { 
      sprite._trueKey = key;
      sprite.loadTexture("cardBack");
      sprite.key = "cardBack";
    } 
      sprite.visible = true;
      sprite.inputEnabled = true;
      sprite.input.useHandCursor = true;
      //save the sprite or image by its name
      this.cardSprites[key] = sprite;
  }
  // makes each card interactive by adding click to each card so that handleCardClick() runs when clciked
  setCardInput() {
  // Initially allow only first choice cards
  const firstChoices = ["diamonds8", "clubs6"];
  firstChoices.forEach(key => {
    const card = this.cardSprites[key];
    if (card) {
      card.inputEnabled = true;
      card.input.useHandCursor = true;
      card.events.onInputDown.add(() => this.handleCardClick(key), this);
    }
  });

  // Register input handlers for all cards (but don’t enable yet)
  this.fullCardKeys = ["diamonds8", "heart7", "clubs6", "wildCard", "heart3", "spades2_left", "diamondsA", "spades2_right"];
  this.fullCardKeys.forEach(key => {
    const card = this.cardSprites[key];
    if (card && !card.events.onInputDown.has(this.handleCardClick, this)) {
      card.events.onInputDown.add(() => this.handleCardClick(key), this);
    }
  });
}

  handleCardClick(key) { //triggered when a card id clciked
    const expectedKey = this.fullFlow[this.handStep];
    // Decide flow on first card click
    if (this.handStep === 0) {
      if (key === "clubs6") {
        this.fullFlow = ["clubs6", "heart7", "diamonds8", "wildCard", "heart3", "spades2_right", "diamondsA", "spades2_left"];
        this.alternatePathChosen = true;
      } else if (key === "diamonds8") {
        this.fullFlow = ["diamonds8", "heart7", "clubs6", "wildCard", "heart3", "spades2_left", "diamondsA", "spades2_right"];
        this.alternatePathChosen = false;
      }
    
  // After first card is clicked, enable all remaining inputs
      this.fullCardKeys.forEach(k => {
        const c = this.cardSprites[k];
        if (c) {
          c.inputEnabled = true;
        }
      });

    }
    if (this.postWildcardPhase) {
      const redCards = ["heart3", "diamondsA"];
      const blackCards = ["spades2_left", "spades2_right"];

      const isRed = redCards.includes(key);
      const isBlack = blackCards.includes(key);

      if (!isRed && !isBlack || !this.isPostWildcardClickAllowed(key)) {
        this.shakeCard(this.cardSprites[key]);
        return;
      }


  // Reject double same-color clicks
      if (this.lastPostWildcardColor === "red" && isRed) {
          this.shakeCard(this.cardSprites[key]);
         return;
      }
      if (this.lastPostWildcardColor === "black" && isBlack) {
        this.shakeCard(this.cardSprites[key]);
        return;
      }

  // Accept valid click
      this.lastPostWildcardColor = isRed ? "red" : "black";
      this.postWildcardFlow.push(key);

      this.handStep++;

     // Move hand to next valid post-wildcard card based on color rule


  // After 2 valid cards of opposite color
      if (this.postWildcardFlow.length === 4) {
        const used = new Set(this.postWildcardFlow);
        const remainingCard = ["heart3", "diamondsA", "spades2_left", "spades2_right"].find(k => !used.has(k));

        // Insert the 3 wildcard choices first
        this.fullFlow.splice(this.handStep + 1, 0, ...this.postWildcardFlow);

        // Then insert the remaining card after them
        if (remainingCard) {
          this.fullFlow.splice(this.handStep + 1 + this.postWildcardFlow.length, 0, remainingCard);
        }

        this.postWildcardPhase = false; 
        this.awaitingPostWildcardClick = false;
        this.handPausedUntilNextClick = false;   
        this.moveHandToNextInFlow();
    }
  } else {
    console.log("Clicked:", key, "| Expected:", this.fullFlow[this.handStep], "| handStep:", this.handStep);

    if (!this.awaitingPostWildcardClick && key !== expectedKey) {

      if (key !== "wildCard") {

        const allowedToShakeEarly = ["heart7", "spades2_left", "spades2_right"];
        const card = this.cardSprites[key];

        if (allowedToShakeEarly.includes(key) && this.flippedCards.has(key)){
          this.shakeCard(card);
        }
      }
      return;
    }
  }

    if (this.hand) {
      this.hand.visible = false;

      if (this.handRepeatTimer) {
        this.game.time.events.remove(this.handRepeatTimer);
        this.handRepeatTimer = null;
      }

      if (this.tapSequenceEvents && this.tapSequenceEvents.length > 0) {
        this.tapSequenceEvents.forEach(e => this.game.time.events.remove(e));
        this.tapSequenceEvents = [];
      }
    }
    const clickedCard = this.cardSprites[key];
    this.world.bringToTop(clickedCard);

    const jumpUpTween = this.game.add.tween(clickedCard).to({y: clickedCard.y - 40}, 150, Phaser.Easing.Quadratic.Out);
    //spin+move
    const moveDownAndRotate = this.game.add.tween(clickedCard).to({
      x: this.activeCard.x,
      y: this.activeCard.y,
      angle: 720
    }, 350, Phaser.Easing.Quadratic.In);

    //chain the tweens
    jumpUpTween.chain(moveDownAndRotate);
    jumpUpTween.start();
    
    //On complete: update activeCard and cleanup
    moveDownAndRotate.onComplete.add(() => {
      clickedCard.inputEnabled = false;
      clickedCard.destroy();
      this.cardSprites[key] = null;
      this.activeCard.loadTexture(key);
      this.updateScore();


      if (key === "diamonds8") {
        if (!this.timerStarted) {
          this.timerStarted = true;
          this.startCountdown();
        }
        this.revealNextCard("spades2_left");
      }

      if (key === "heart7") {
        this.timerStarted = true;

        if (this.timerEvent) {
          this.game.time.events.remove(this.timerEvent);
          this.timerEvent = null;
        }
        if (this.timerText) {
          this.timerText.visible = false;
        }
        if (this.bomb) {
          this.bomb.destroy();
          this.bomb = null;
        }
        if (this.bombAnimationLoop) {
          this.game.time.events.remove(this.bombAnimationLoop);
          this.bombAnimationLoop = null;
        }
      }

      if (key === "clubs6") {
        if (!this.timerStarted) {
          this.timerStarted = true;
          this.startCountdown();
        }
        this.revealNextCard("spades2_right");
      }
      
      if (key === "wildCard") {
        this.revealNextCard("heart3");
        this.revealNextCard("diamondsA");

        this.postWildcardPhase = true;
        this.awaitingPostWildcardClick = true;
        this.handPausedUntilNextClick = true;
        this.postWildcardFlow = [];
        this.lastPostWildcardColor = null;

          // Manually enable input for all 4 top cards
        ["heart3", "diamondsA", "spades2_left", "spades2_right"].forEach(cardKey => {
          const card = this.cardSprites[cardKey];
          if (card) {
            card.inputEnabled = true;
            card.input.useHandCursor = true;
            card.events.onInputDown.removeAll(); // clear old handlers
            card.events.onInputDown.add(() => this.handleCardClick(cardKey), this);
          }
         });
        }
              
      // ✅ Update streak meter icons
      if (key === "heart3") {
        this.showStreakIcon(0, "hudRed"); // yellow overlay
      }
      if (key === "spades2_left") {
        this.showStreakIcon(1, "hudBlack"); // purple overlay
      }
      if (key === "diamondsA") {
        this.showStreakIcon(2, "hudRed"); // yellow overlay
      }
      if (key === "spades2_right") {
        this.showStreakIcon(3, "hudBlack"); // purple overlay
      }

      this.handStep++;
      //ends the game once all cards are completed
      if (this.handStep >= this.fullFlow.length) {
        console.log("All cards completed! Game over.");
      //Make the hand disappear
      if (this.hand) {
        this.hand.visible = false;
        this.hand.destroy();
        this.hand = null;
      }
        if (this.handAnimationLoop) {
          this.game.time.events.remove(this.handAnimationLoop);
          this.handAnimationLoop = null;
        }
        return;
      }
      //moves the hand pointer to next card after 300ms
        if (!this.handPausedUntilNextClick) {
          this.moveHandToNextInFlow();
        }
      });
    }
  
  // update score by 1000
  updateScore() {
    const targetScore = this.score + 1000;
    this.score = targetScore;
    //increase score gradually
    this.game.time.events.loop(Phaser.Timer.SECOND / 60, () => {
      if (this.displayedScore < this.score) {
        this.displayedScore += 25; //+25 means it takes, 40 frames to reach the next 1000
        if (this.displayedScore > this.score) {
          this.displayedScore = this.score;
        }
        this.scoreText.text = Math.floor(this.displayedScore).toLocaleString(); //Math.floor(..) ensures clean display of the integers //toLocaleString() formats it with commas, e.g, 95,200
      }
    }, this);
  }
  // countdown for bomb
  startCountdown() {
    this.timerText.visible = true;
    this.timerText.text = this.counter.toString();
    this.timerEvent = this.game.time.events.loop(Phaser.Timer.SECOND, () => {
      this.counter--;
      if(this.counter >= 0) {
        this.timerText.text = this.counter.toString();
      }
      
      if(this.counter <= 0) {
        this.game.time.events.remove(this.timerEvent);
      }
    }, this);
  }

  //moves pointer to card
  moveHandToCard(cardKey) {
  const targetCard = this.cardSprites[cardKey];
  if (!targetCard || !targetCard.alive || !targetCard.visible) {
    console.warn("Hand move skipped: card not found or already removed:", cardKey);
    return;
  }
  const hand = this.hand;
  hand.visible = true;

  // Position the hand below the target card
  hand.x = targetCard.x + 15;
  hand.y = targetCard.y + 90;

  // Cancel any existing repeat timer
  if (this.handRepeatTimer) {
    this.game.time.events.remove(this.handRepeatTimer);
    this.handRepeatTimer = null;
  }
  if (this.tapSequenceEvents.length > 0) {
    this.tapSequenceEvents.forEach(e => this.game.time.events.remove(e));
    this.tapSequenceEvents = [];
  }

  // Tap 3 times using frame animation
  let tapCount = 0;
  const maxTaps = 3;
  const tapInterval = 1500; // time between taps

  const tapOnce = () => {
    tapCount++;

    // (Hand frame animation is already looping using handAnimationLoop, so no need to change it)
    // Just let it play visible for one tap cycle
    hand.visible = true;

    const tapEvent = this.game.time.events.add(tapInterval, () => {
      if (tapCount < maxTaps) {
        tapOnce(); // tap again
      } else {
        // After final tap, hide the hand and restart after a delay
        hand.visible = false;

        this.handRepeatTimer = this.game.time.events.add(Phaser.Timer.SECOND * 10, () => {
          this.moveHandToCard(cardKey); // restart the tap loop
        });
      }
    });
    this.tapSequenceEvents.push(tapEvent);
  };

  // Start first tap cycle
  tapOnce();
}

  //Flips or reveal the card 
  revealNextCard(cardKey) {
    //prevent duplicate flips
    if (this.flippedCards.has(cardKey)) return;
    const card = this.cardSprites[cardKey];
    if (card) {
      //flip card by loading the real texture
      if (card._trueKey) {
        card.loadTexture(card._trueKey);
      }
      card.visible = true;
      card.inputEnabled = true;
      card.input.useHandCursor = true;
      //mark this card as flipped
      this.flippedCards.add(cardKey);
      //adds a quick flip animation
      const flipKeys = ['heart3', 'spades2_left', 'diamondsA', 'spades2_right'];
      if (flipKeys.includes(cardKey)) {
        this.game.add.tween(card.scale).from({ x: 0}, 200, Phaser.Easing.Linear.None, true);
      }
    } else {
      console.warn(`Tried to reveal missing card: ${cardKey}`);
    }
 }
 showStreakIcon(position, key) {
  const icon = this.streakIcons[position];
  if (icon) {
    icon.loadTexture(key);
    icon.visible = true;
  }
}
shakeCard(card) {
  if (card.isShaking) return;

  card.isShaking = true;

  // Save original position only once
  if (typeof card.originalX === 'undefined') {
    card.originalAngle = card.angle;
  }

  this.game.tweens.removeFrom(card); // cancel any old tweens to avoid stacking

  const shakeTween = this.game.add.tween(card)
    .to({ angle: card.originalAngle - 8 }, 50, Phaser.Easing.Linear.None)
    .to({ angle: card.originalAngle + 8 }, 100, Phaser.Easing.Linear.None)
    .to({ angle: card.originalAngle - 4 }, 80, Phaser.Easing.Linear.None)
    .to({ angle: card.originalAngle + 4 }, 60, Phaser.Easing.Linear.None)
    .to({ angle: card.originalAngle }, 50, Phaser.Easing.Linear.None);

  shakeTween.onComplete.add(() => {
    card.isShaking = false;
    card.angle = card.originalAngle;
  });

  shakeTween.start();
}
isPostWildcardClickAllowed(key) {
  const redCards = ["heart3", "diamondsA"];
  const blackCards = ["spades2_left", "spades2_right"];
  const isRed = redCards.includes(key);
  const isBlack = blackCards.includes(key);

  if (this.lastPostWildcardColor === null) return true; // first of 3 allowed
  if (this.lastPostWildcardColor === "red" && isBlack) return true;
  if (this.lastPostWildcardColor === "black" && isRed) return true;
  return false;
}
}