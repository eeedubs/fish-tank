class SwitchFish extends Fish {

  constructor(options) {
    super(options)
    this.imageUri = '/images/switchfish.png';
    this.isTasty = true;
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
