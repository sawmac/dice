var die =  {
  roll : function() {
    /// 1 to this.upper 
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

var makeDie = function () {
  var upperRoll, lowerRoll = 1, symbols = false, dieObj;
  if (arguments.length === 0) {
    throw new Error('No arguments passed to function');
  }
  // symbols passed as an array
  if (Array.isArray(arguments[0])) {
    upperRoll = arguments[0].length;
    symbols = arguments[0];
  } else if (arguments.length > 1) { // die from x to y
    lowerRoll = arguments[0];
    upperRoll = arguments[1];
    if (lowerRoll > upperRoll || lowerRoll === upperRoll) {
      throw new Error('First value should be less than second value');
    }
  } else  { // die from 1 to y
    upperRoll = arguments[0];
  }
  // create the die
  dieObj = Object.create(die, {
    lower : { value : lowerRoll },
    upper : { value : upperRoll },
    symbols : { value : symbols }
  });
  return dieObj;
}
