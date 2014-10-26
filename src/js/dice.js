var Die = {
  lower: 1,
  upper: 6,
  symbols: false,

  init: function() {
    //just pass array of symbols to create symbol die
    if (Array.isArray(arguments[0])) {
      this.upper = arguments[0].length;
      this.symbols = arguments[0];
    } else if (arguments.length > 1) { // die from x to y
      this.lower = arguments[0];
      this.upper = arguments[1];
      if (this.lower > this.upper || this.lower === this.upper) {
        throw new Error('First value should be less than second value');
      }
    } else  { // die from 1 to y
      this.upper = arguments[0];
    }
    return this;
  },

  roll: function() {
    var roll = Math.floor(Math.random() * (this.upper - this.lower + 1)) + this.lower;
    if (this.symbols) {
      /* symbols are in array so need to subtract 1 to 
         get to value beween 0 - x */
      return this.symbols[roll-1];
    } else {
      return roll;
    }
  }
}