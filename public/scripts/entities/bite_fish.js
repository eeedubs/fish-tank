class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.name = 'bitefish';
    this.imageUri = '/images/bitefish.gif';
    this.maxSwimSpeed = 100;
    this.isTasty = false;
    this.makeNewVelocity();
  }

  update(t) {
    let fishIds = Object.keys(this.tank.denizens)
    fishIds.forEach((id) => {
      let fish = this.tank.denizens[id]
      if (fish.isTasty && this.isClose(fish.position.x, fish.position.y)){
        console.log("CHOMP")
        fish.kill()
      }
    })
    for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
      this.updateOneTick();
    }
  }

  isClose = (posX, posY,) => {
    return (
      Math.abs(posX - this.position.x) <= 40 && Math.abs(posY - this.position.y) <= 40
    )
  }
}
