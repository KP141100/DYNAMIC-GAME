(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Boot = _interopRequireDefault(require("./states/Boot.js"));
var _Preload = _interopRequireDefault(require("./states/Preload.js"));
var _Game = _interopRequireDefault(require("./states/Game.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var game = new Phaser.Game(1080, 1920, Phaser.AUTO, 'gameContainer');
game.state.add("Boot", _Boot["default"]);
game.state.add("Preload", _Preload["default"]);
game.state.add("Game", _Game["default"]);
game.state.start("Boot");

},{"./states/Boot.js":2,"./states/Game.js":3,"./states/Preload.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Boot = exports["default"] = /*#__PURE__*/function () {
  function Boot() {
    _classCallCheck(this, Boot);
  }
  return _createClass(Boot, [{
    key: "preload",
    value: function preload() {
      console.log("Boot -> preload");
      // Optionally load a loading bar or minimal assets
    }
  }, {
    key: "create",
    value: function create() {
      console.log("Boot -> create");
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      this.scale.refresh();
      this.state.start("Preload");
    }
  }]);
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Game = exports["default"] = /*#__PURE__*/function () {
  //export or defines a 'Game' class that contains all logic
  function Game() {
    _classCallCheck(this, Game);
    // initializes variables for game phases, score, elements and card management
    this.score = 95000; //game starts with score of 95000
    this.displayedScore = 95000; //for smooth animation of score
    this.timerStarted = false; //tracks whether timer has started or not
    this.hand = null; //hand is the pointer sprite 
    this.handRepeatTimer = null; // already exists
    this.handFrameIndex = 0; //handFrameIndex tracks its current frame
    this.handPausedUntilNextClick = false;
    this.fullFlow = ["diamonds8", "heart7", "clubs6", "wildCard", "heart3", "spades2_left", "diamondsA", "spades2_right"]; //flow of cards that needs to be followed by the player 
    this.alternatePathChosen = false; //track which path player chooses
    this.awaitingPostWildcardClick = false;
    this.postWildcardPhase = false;
    this.postWildcardFlow = []; // stores the 3 card choices after wildcard
    this.lastPostWildcardColor = null; // tracks last color clicked in wildcard phase
    this.handStep = 0; //tracks current index in fullFlow
    this.counter = 10; //countdown from 10 seconds
    this.timerText = null; //text showing countdown
    this.bomb = null; //bomb image that fades on timeOut
    this.timerEvent = null; //timerloop reference for clearing
    this.flippedCards = new Set(); //Track flipped card
    this.streakIcons = []; //to hold references to overlay 4 icons
    this.cardSprites = {}; //stores references to all card sprites
    this.tapSequenceEvents = []; // NEW: stores tap timers so we can cancel them
  }
  return _createClass(Game, [{
    key: "create",
    value: function create() {
      var _this = this;
      // initializes everything
      var centerX = this.world.centerX; //calculates horizontal center of the screen
      this.add.sprite(0, 0, "background").scale.setTo(1.0); //add the background image for game

      // UI Elements
      // LOGO
      //adds logo at top
      var logo = this.add.sprite(centerX - 190, 40, "logo");
      logo.scale.setTo(1.3);

      // SCOREPANEL
      //add scorepanel on left
      var scorePanel = this.add.sprite(10, 300, "hudPanel");
      scorePanel.scale.setTo(1.3);
      scorePanel.anchor.set(0, 0);
      var panelWidth = scorePanel.width;
      var panelHeight = scorePanel.height;
      //add the scoetext at the center of the scorepanel
      this.scoreText = this.add.text(0, 0, this.displayedScore.toLocaleString(), {
        font: "bold 50px semibold",
        fill: "#a14218"
      });
      this.scoreText.anchor.set(0.7);
      this.scoreText.x = scorePanel.x + panelWidth / 2 + 55;
      this.scoreText.y = scorePanel.y + panelHeight / 2 + 5;

      // STREAK METER
      var streak = this.add.sprite(centerX + 180, 300, "hudStreak");
      streak.scale.setTo(1.3);
      // Add 4 overlay icon placeholders (invisible initially)
      var iconSpacing = 72; // Adjust based on your asset layout
      var startX = streak.x + 70; // Adjust these offsets if icons don't align perfectly
      var startY = streak.y + 55;
      var iconPositions = [{
        x: startX,
        y: startY
      },
      // 1st icon
      {
        x: startX + iconSpacing,
        y: startY
      },
      // 2nd icon
      {
        x: startX + iconSpacing * 2,
        y: startY
      },
      // 3rd icon
      {
        x: startX + iconSpacing * 3,
        y: startY
      } // 4th icon
      ];
      iconPositions.forEach(function (pos) {
        var icon = _this.add.sprite(pos.x, pos.y, null); // empty at start
        icon.anchor.set(0.5);
        icon.scale.setTo(1.1);
        icon.visible = false;
        _this.streakIcons.push(icon); // store reference
      });

      // TOP CARDS
      var topCards = [{
        key: "heart3",
        x: centerX - 180,
        y: 630,
        angle: 15
      }, {
        key: "diamondsA",
        x: centerX + 180,
        y: 630,
        angle: -15
      }, {
        key: "wildCard",
        x: centerX,
        y: 620,
        angle: 0
      }];
      topCards.forEach(function (card) {
        return _this.addCard(card.key, card.x, card.y, card.angle);
      }); //adds card using the coordinates and angles

      // PHASE 2 CARDS
      var phase2 = [{
        key: "spades2_left",
        x: centerX - 303,
        y: 1090,
        angle: 15
      }, {
        key: "spades2_right",
        x: centerX + 303,
        y: 1090,
        angle: -15
      }];
      phase2.forEach(function (card) {
        return _this.addCard(card.key, card.x, card.y, card.angle);
      }); //adds cards using coordinates and angles

      //PHASE 1 CARDS
      var phase1Fronts = [{
        key: "diamonds8",
        x: centerX - 242,
        y: 860,
        angle: 15
      }, {
        key: "heart7",
        x: centerX,
        y: 855,
        angle: 0
      }, {
        key: "clubs6",
        x: centerX + 242,
        y: 860,
        angle: -15
      }];
      phase1Fronts.forEach(function (card) {
        return _this.addCard(card.key, card.x, card.y, card.angle);
      }); //adds card using the coordinates and angles
      this.flippedCards.add("heart7");

      // BOMB ICON
      //adds bomb icon
      this.bomb = this.add.sprite(centerX + 70, 950, "000");
      this.bomb.anchor.set(0.5);
      this.bomb.angle = 30;
      this.bomb.scale.setTo(0.9);
      this.bombFrames = ["000", "001", "002"];
      this.bombFrameIndex = 0;
      this.bombAnimationLoop = this.game.time.events.loop(200, function () {
        _this.bombFrameIndex = (_this.bombFrameIndex + 1) % _this.bombFrames.length;
        var nextFrameKey = _this.bombFrames[_this.bombFrameIndex];
        if (_this.bomb && _this.bomb.alive && _this.cache.checkImageKey(nextFrameKey)) {
          _this.bomb.loadTexture(nextFrameKey);
        } else {
          console.warn("Bomb missing or frame not found in cache:", nextFrameKey);
        }
      });

      // TIMER
      //adds timer text to represent the countdown 
      this.timerText = this.add.text(this.bomb.x - 10, this.bomb.y + 13, "10", {
        font: "bold 60px semibold",
        fill: "#fff1b2"
      });
      this.timerText.anchor.set(0.5);
      this.timerText.visible = true;

      //RED OUTLINE BOX
      var talonOutline = this.add.sprite(centerX, 1726, "talon");
      talonOutline.anchor.set(0.5);
      talonOutline.scale.setTo(2.2);

      // ACTIVE CARD
      this.activeCard = this.add.sprite(centerX, 1726, "heart7");
      this.activeCard.anchor.set(0.5);
      this.activeCard.scale.setTo(0.9);

      // PHASE FLOWS
      this.phase1Flow1 = ["diamonds8", "heart7", "clubs6"];
      this.phase1Flow2 = ["spades2_left", "spades2_right"];

      // INPUT SETUP AFTER ALL CARDS ADDED
      this.setCardInput();

      // HAND POINTER
      this.hand = this.add.sprite(-100, -100, "h000");
      this.hand.anchor.set(0.5);
      this.hand.scale.setTo(0.7);

      // Animate hand frames
      this.handAnimationLoop = this.game.time.events.loop(120, function () {
        if (!_this.hand || !_this.hand.exists || !_this.hand.alive) return;
        _this.handFrameIndex = (_this.handFrameIndex + 1) % 11;
        var frameKey = "h".concat(_this.handFrameIndex.toString().padStart(3, '0'));
        if (_this.cache.checkImageKey(frameKey)) {
          _this.hand.loadTexture(frameKey);
        } else {
          console.warn("Missing frame:", frameKey);
        }
      }, this);
      //moves hand to the card in fullFlow
      this.moveHandToNextInFlow();

      // MUSIC
      this.music = this.add.audio("bgMusic");
      this.music.loop = true;
      this.music.play();
    }
  }, {
    key: "moveHandToNextInFlow",
    value: function moveHandToNextInFlow() {
      //move hand to first card according to fullFlow  
      var nextKey = this.fullFlow[this.handStep];
      console.log("Moving to next in flow:", nextKey, "handStep:", this.handStep);
      if (!nextKey) return; //stop if there is no next card

      this.revealNextCard(nextKey);
      this.moveHandToCard(nextKey);
    }
    //add card on the screen at a given position with angle
  }, {
    key: "addCard",
    value: function addCard(key, x, y) {
      var angle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var sprite = this.add.sprite(x, y, key);
      sprite.anchor.set(0.5);
      sprite.angle = angle;
      sprite.scale.setTo(0.87, 0.87);
      var shouldBeVisible = ['diamonds8', 'heart7', 'clubs6', 'wildCard'].includes(key); //cards which have their front face shown up
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
  }, {
    key: "setCardInput",
    value: function setCardInput() {
      var _this2 = this;
      // Initially allow only first choice cards
      var firstChoices = ["diamonds8", "clubs6"];
      firstChoices.forEach(function (key) {
        var card = _this2.cardSprites[key];
        if (card) {
          card.inputEnabled = true;
          card.input.useHandCursor = true;
          card.events.onInputDown.add(function () {
            return _this2.handleCardClick(key);
          }, _this2);
        }
      });

      // Register input handlers for all cards (but don’t enable yet)
      this.fullCardKeys = ["diamonds8", "heart7", "clubs6", "wildCard", "heart3", "spades2_left", "diamondsA", "spades2_right"];
      this.fullCardKeys.forEach(function (key) {
        var card = _this2.cardSprites[key];
        if (card && !card.events.onInputDown.has(_this2.handleCardClick, _this2)) {
          card.events.onInputDown.add(function () {
            return _this2.handleCardClick(key);
          }, _this2);
        }
      });
    }
  }, {
    key: "handleCardClick",
    value: function handleCardClick(key) {
      var _this3 = this;
      //triggered when a card id clciked
      var expectedKey = this.fullFlow[this.handStep];
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
        this.fullCardKeys.forEach(function (k) {
          var c = _this3.cardSprites[k];
          if (c) {
            c.inputEnabled = true;
          }
        });
      }
      if (this.postWildcardPhase) {
        var redCards = ["heart3", "diamondsA"];
        var blackCards = ["spades2_left", "spades2_right"];
        var isRed = redCards.includes(key);
        var isBlack = blackCards.includes(key);
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
          var _this$fullFlow;
          var used = new Set(this.postWildcardFlow);
          var remainingCard = ["heart3", "diamondsA", "spades2_left", "spades2_right"].find(function (k) {
            return !used.has(k);
          });

          // Insert the 3 wildcard choices first
          (_this$fullFlow = this.fullFlow).splice.apply(_this$fullFlow, [this.handStep + 1, 0].concat(_toConsumableArray(this.postWildcardFlow)));

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
            var allowedToShakeEarly = ["heart7", "spades2_left", "spades2_right"];
            var card = this.cardSprites[key];
            if (allowedToShakeEarly.includes(key) && this.flippedCards.has(key)) {
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
          this.tapSequenceEvents.forEach(function (e) {
            return _this3.game.time.events.remove(e);
          });
          this.tapSequenceEvents = [];
        }
      }
      var clickedCard = this.cardSprites[key];
      this.world.bringToTop(clickedCard);
      var jumpUpTween = this.game.add.tween(clickedCard).to({
        y: clickedCard.y - 40
      }, 150, Phaser.Easing.Quadratic.Out);
      //spin+move
      var moveDownAndRotate = this.game.add.tween(clickedCard).to({
        x: this.activeCard.x,
        y: this.activeCard.y,
        angle: 720
      }, 350, Phaser.Easing.Quadratic.In);

      //chain the tweens
      jumpUpTween.chain(moveDownAndRotate);
      jumpUpTween.start();

      //On complete: update activeCard and cleanup
      moveDownAndRotate.onComplete.add(function () {
        clickedCard.inputEnabled = false;
        clickedCard.destroy();
        _this3.cardSprites[key] = null;
        _this3.activeCard.loadTexture(key);
        _this3.updateScore();
        if (key === "diamonds8") {
          if (!_this3.timerStarted) {
            _this3.timerStarted = true;
            _this3.startCountdown();
          }
          _this3.revealNextCard("spades2_left");
        }
        if (key === "heart7") {
          _this3.timerStarted = true;
          if (_this3.timerEvent) {
            _this3.game.time.events.remove(_this3.timerEvent);
            _this3.timerEvent = null;
          }
          if (_this3.timerText) {
            _this3.timerText.visible = false;
          }
          if (_this3.bomb) {
            _this3.bomb.destroy();
            _this3.bomb = null;
          }
          if (_this3.bombAnimationLoop) {
            _this3.game.time.events.remove(_this3.bombAnimationLoop);
            _this3.bombAnimationLoop = null;
          }
        }
        if (key === "clubs6") {
          if (!_this3.timerStarted) {
            _this3.timerStarted = true;
            _this3.startCountdown();
          }
          _this3.revealNextCard("spades2_right");
        }
        if (key === "wildCard") {
          _this3.revealNextCard("heart3");
          _this3.revealNextCard("diamondsA");
          _this3.postWildcardPhase = true;
          _this3.awaitingPostWildcardClick = true;
          _this3.handPausedUntilNextClick = true;
          _this3.postWildcardFlow = [];
          _this3.lastPostWildcardColor = null;

          // Manually enable input for all 4 top cards
          ["heart3", "diamondsA", "spades2_left", "spades2_right"].forEach(function (cardKey) {
            var card = _this3.cardSprites[cardKey];
            if (card) {
              card.inputEnabled = true;
              card.input.useHandCursor = true;
              card.events.onInputDown.removeAll(); // clear old handlers
              card.events.onInputDown.add(function () {
                return _this3.handleCardClick(cardKey);
              }, _this3);
            }
          });
        }

        // ✅ Update streak meter icons
        if (key === "heart3") {
          _this3.showStreakIcon(0, "hudRed"); // yellow overlay
        }
        if (key === "spades2_left") {
          _this3.showStreakIcon(1, "hudBlack"); // purple overlay
        }
        if (key === "diamondsA") {
          _this3.showStreakIcon(2, "hudRed"); // yellow overlay
        }
        if (key === "spades2_right") {
          _this3.showStreakIcon(3, "hudBlack"); // purple overlay
        }
        _this3.handStep++;
        //ends the game once all cards are completed
        if (_this3.handStep >= _this3.fullFlow.length) {
          console.log("All cards completed! Game over.");
          //Make the hand disappear
          if (_this3.hand) {
            _this3.hand.visible = false;
            _this3.hand.destroy();
            _this3.hand = null;
          }
          if (_this3.handAnimationLoop) {
            _this3.game.time.events.remove(_this3.handAnimationLoop);
            _this3.handAnimationLoop = null;
          }
          return;
        }
        //moves the hand pointer to next card after 300ms
        if (!_this3.handPausedUntilNextClick) {
          _this3.moveHandToNextInFlow();
        }
      });
    }

    // update score by 1000
  }, {
    key: "updateScore",
    value: function updateScore() {
      var _this4 = this;
      var targetScore = this.score + 1000;
      this.score = targetScore;
      //increase score gradually
      this.game.time.events.loop(Phaser.Timer.SECOND / 60, function () {
        if (_this4.displayedScore < _this4.score) {
          _this4.displayedScore += 25; //+25 means it takes, 40 frames to reach the next 1000
          if (_this4.displayedScore > _this4.score) {
            _this4.displayedScore = _this4.score;
          }
          _this4.scoreText.text = Math.floor(_this4.displayedScore).toLocaleString(); //Math.floor(..) ensures clean display of the integers //toLocaleString() formats it with commas, e.g, 95,200
        }
      }, this);
    }
    // countdown for bomb
  }, {
    key: "startCountdown",
    value: function startCountdown() {
      var _this5 = this;
      this.timerText.visible = true;
      this.timerText.text = this.counter.toString();
      this.timerEvent = this.game.time.events.loop(Phaser.Timer.SECOND, function () {
        _this5.counter--;
        if (_this5.counter >= 0) {
          _this5.timerText.text = _this5.counter.toString();
        }
        if (_this5.counter <= 0) {
          _this5.game.time.events.remove(_this5.timerEvent);
        }
      }, this);
    }

    //moves pointer to card
  }, {
    key: "moveHandToCard",
    value: function moveHandToCard(cardKey) {
      var _this6 = this;
      var targetCard = this.cardSprites[cardKey];
      if (!targetCard || !targetCard.alive || !targetCard.visible) {
        console.warn("Hand move skipped: card not found or already removed:", cardKey);
        return;
      }
      var hand = this.hand;
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
        this.tapSequenceEvents.forEach(function (e) {
          return _this6.game.time.events.remove(e);
        });
        this.tapSequenceEvents = [];
      }

      // Tap 3 times using frame animation
      var tapCount = 0;
      var maxTaps = 3;
      var tapInterval = 1500; // time between taps

      var _tapOnce = function tapOnce() {
        tapCount++;

        // (Hand frame animation is already looping using handAnimationLoop, so no need to change it)
        // Just let it play visible for one tap cycle
        hand.visible = true;
        var tapEvent = _this6.game.time.events.add(tapInterval, function () {
          if (tapCount < maxTaps) {
            _tapOnce(); // tap again
          } else {
            // After final tap, hide the hand and restart after a delay
            hand.visible = false;
            _this6.handRepeatTimer = _this6.game.time.events.add(Phaser.Timer.SECOND * 10, function () {
              _this6.moveHandToCard(cardKey); // restart the tap loop
            });
          }
        });
        _this6.tapSequenceEvents.push(tapEvent);
      };

      // Start first tap cycle
      _tapOnce();
    }

    //Flips or reveal the card 
  }, {
    key: "revealNextCard",
    value: function revealNextCard(cardKey) {
      //prevent duplicate flips
      if (this.flippedCards.has(cardKey)) return;
      var card = this.cardSprites[cardKey];
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
        var flipKeys = ['heart3', 'spades2_left', 'diamondsA', 'spades2_right'];
        if (flipKeys.includes(cardKey)) {
          this.game.add.tween(card.scale).from({
            x: 0
          }, 200, Phaser.Easing.Linear.None, true);
        }
      } else {
        console.warn("Tried to reveal missing card: ".concat(cardKey));
      }
    }
  }, {
    key: "showStreakIcon",
    value: function showStreakIcon(position, key) {
      var icon = this.streakIcons[position];
      if (icon) {
        icon.loadTexture(key);
        icon.visible = true;
      }
    }
  }, {
    key: "shakeCard",
    value: function shakeCard(card) {
      if (card.isShaking) return;
      card.isShaking = true;

      // Save original position only once
      if (typeof card.originalX === 'undefined') {
        card.originalAngle = card.angle;
      }
      this.game.tweens.removeFrom(card); // cancel any old tweens to avoid stacking

      var shakeTween = this.game.add.tween(card).to({
        angle: card.originalAngle - 8
      }, 50, Phaser.Easing.Linear.None).to({
        angle: card.originalAngle + 8
      }, 100, Phaser.Easing.Linear.None).to({
        angle: card.originalAngle - 4
      }, 80, Phaser.Easing.Linear.None).to({
        angle: card.originalAngle + 4
      }, 60, Phaser.Easing.Linear.None).to({
        angle: card.originalAngle
      }, 50, Phaser.Easing.Linear.None);
      shakeTween.onComplete.add(function () {
        card.isShaking = false;
        card.angle = card.originalAngle;
      });
      shakeTween.start();
    }
  }, {
    key: "isPostWildcardClickAllowed",
    value: function isPostWildcardClickAllowed(key) {
      var redCards = ["heart3", "diamondsA"];
      var blackCards = ["spades2_left", "spades2_right"];
      var isRed = redCards.includes(key);
      var isBlack = blackCards.includes(key);
      if (this.lastPostWildcardColor === null) return true; // first of 3 allowed
      if (this.lastPostWildcardColor === "red" && isBlack) return true;
      if (this.lastPostWildcardColor === "black" && isRed) return true;
      return false;
    }
  }]);
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Preload = exports["default"] = /*#__PURE__*/function () {
  function Preload() {
    _classCallCheck(this, Preload);
  }
  return _createClass(Preload, [{
    key: "preload",
    value: function preload() {
      console.log("Preload -> preload");
      // Background
      this.load.image("background", "Assets/bg.jpg");

      // Cards
      this.load.image("cardBack", "Assets/Card-Back.png");
      this.load.image("clubs5", "Assets/Clubs-5.png");
      this.load.image("clubs6", "Assets/Clubs-6.png");
      this.load.image("diamonds8", "Assets/Diamonds-8.png");
      this.load.image("diamondsA", "Assets/Diamonds-A.png");
      this.load.image("heart3", "Assets/Heart-3.png");
      this.load.image("heart7", "Assets/Heart-7.png");
      this.load.image("spades2_left", "Assets/Spades-2.png");
      this.load.image("spades2_right", "Assets/Spades-2.png");
      this.load.image("wildCard", "Assets/Wild-Card.png");
      this.load.image("talon", "Assets/Talon.png");

      // bomb
      this.load.image("000", "Assets/bomb/000.png");
      this.load.image("001", "Assets/bomb/001.png");
      this.load.image("002", "Assets/bomb/002.png");

      // handframe
      this.load.image("h000", "Assets/hand-frame/000.png");
      this.load.image("h001", "Assets/hand-frame/001.png");
      this.load.image("h002", "Assets/hand-frame/002.png");
      this.load.image("h003", "Assets/hand-frame/003.png");
      this.load.image("h004", "Assets/hand-frame/004.png");
      this.load.image("h005", "Assets/hand-frame/005.png");
      this.load.image("h006", "Assets/hand-frame/006.png");
      this.load.image("h007", "Assets/hand-frame/007.png");
      this.load.image("h008", "Assets/hand-frame/008.png");
      this.load.image("h009", "Assets/hand-frame/009.png");
      this.load.image("h010", "Assets/hand-frame/010.png");
      // UI
      this.load.image("logo", "Assets/logo.png");
      this.load.image("hudPanel", "Assets/HUD-Panel.png");
      this.load.image("hudBlack", "Assets/HUD-Streakmeter_Black.png");
      this.load.image("hudBlank", "Assets/HUD-Streakmeter_Blank.png");
      this.load.image("hudRed", "Assets/HUD-Streakmeter_Red.png");
      this.load.image("hudStreak", "Assets/streak-hud.png");

      //Audio
      this.load.audio("bgMusic", "Assets/Game_music.mp3");
    }
  }, {
    key: "create",
    value: function create() {
      console.log("Preload -> create");
      this.state.start("Game");
    }
  }]);
}();

},{}]},{},[1]);
