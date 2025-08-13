export default class Boot {
  preload() {
    console.log("Boot -> preload");
    // Optionally load a loading bar or minimal assets
  }

  create() {
    console.log("Boot -> create");
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.forceOrientation(true, false);
    this.scale.enterIncorrectOrientation.add(function () {
      document.getElementById('orientation').style.display = 'block'; 
    }, this);
    this.scale.leaveIncorredctOrientation.add(function () {
      document.getElementById('orientation').style.display = 'none';
    }, this);
    this.scale.setResizeCallback(this.resizeGame, this);
    this.sccale.refresh();
    this.state.start("Preload");
  }

  resizeGame() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.game.scale.setGameSize(w, h);
  }
}
