class SwitchFish extends Fish {

  constructor(options) {
    super(options)
    this.name = 'switchfish'
    this.imageUri = '/images/switchfish.png';
    this.isTasty = true;
  }

  onClick(event) {
    this.makeNewVelocity(50);
  }
}
