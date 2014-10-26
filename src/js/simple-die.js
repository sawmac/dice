var Random = {
  lower: 1,
  upper: 100,
  roll: function () {
    return Math.floor(Math.random() * (this.upper - this.lower + 1)) + this.lower;
  },
  init: function(lower,upper) {
    this.lower = lower;
    this.upper = upper;
    return this;
  }
}

var sixSided = Object.create(Random).init(1,6);