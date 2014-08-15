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
  // symbols passed as an array
  if (Array.isArray(arguments[0])) {
    upperRoll = arguments[0].length;
    symbols = arguments[0];
  } else if (arguments.length > 1) { // die from x to y
    lowerRoll = arguments[0];
    upperRoll = arguments[1];
  } else  { // die from 1 to y
    upperRoll = arguments[0];
  }
  // create the die
  dieObj = Object.create(die, {
    lower : { value : lowerRoll },
    upper : { value : upperRoll },
    symbols : { value : symbols}
  });
  return dieObj;
}
/*
var sixSided = makeDie(1, 6);
var twelveSided = makeDie(1, 12);
var fanDooble = makeDie([
                'fandooble',
                'red dragon', 
                'wizard', 
                'knight', 
                'green dragon', 
                'gold']
);


var rollCounts = [0,0,0,0,0,0,0,0,0,0,0,0];

for (var i = 1 ; i < 1000 ; i += 1) {
  var roll = twelveSided.roll() - 1;
  rollCounts[roll] += 1;
}

console.log(rollCounts);

console.log(fanDooble.roll());
console.log(sixSided.roll());
console.log(twelveSided.roll());
*/