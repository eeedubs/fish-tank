class BasicFish extends Fish {

  constructor(options) {
    super(options)
    this.imageUri = '/images/fish01.png';
    this.isTasty = true;
  }

  onClick(event) {
    this.kill()
  }
}
