export default class Preload{
    preload(){
        console.log("Preload -> preload");
        // Background
        this.load.image("background", "Assets/bg.jpg");

        // Cards
        this.load.image("cardBack", "Assets/Card-Back.png");
        this.load.image("clubs5","Assets/Clubs-5.png");
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

    create() {
        console.log("Preload -> create");
        this.state.start("Game");
    }
}