class BasicFish extends Fish {

  constructor(options) {
    super(options)
    this.name = 'basicfish';
    this.imageUri = '/images/basicfish.png';
    this.isTasty = true;
  }

  onClick(event) {
    this.kill()
  }
}
