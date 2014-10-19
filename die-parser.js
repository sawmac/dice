//var test = '1d10+2d8';


var rollParser = function(str) { 
  // take into account uppercase 'D'
  str = str.toLowerCase();
  //remove any spaces
  str = str.replace(/ /g,'');
  // test if there are any other characters but
  // number, d or +
  if (/[^d\+0-9]+/.test(str)) {
    throw new Error( "'" + str + "' is not a valid string" );
  }

  var results = {};
  var total = 0;
  var dieCollections = str.split('+');

  // iterated through each set of dice 
  dieCollections.forEach( function (elem) {
    var rolls = elem.split('d');
    var error = false;
    var totalRolls;
    var dieNum;
    var dieType;
    var rollVal;

    if (rolls.length > 2) {
      error = true;
    } else if (rolls.length === 1) {
      dieNum = parseInt( rolls[0] );
      totalRolls = 1;
      // if it's not a number then error
      if (! dieNum ) {
        error = true;
      }
    } else {
      totalRolls = parseInt(rolls[0]);
      if (totalRolls === 0) {
        throw new Error("You can't roll the die 0 times.");
      }
      totalRolls = totalRolls || 1;
      dieNum = parseInt(rolls[1]);
      if (dieNum === 0) {
        throw new Error("Hey, there are no 0-sided dice.");
      }
      if ( ! dieNum ) {
        error = true;
      }
    }

    if ( error ) {
      throw new Error( "'" + elem + "' is not validly formatted");
    }
    
    dieType = 'd' + dieNum;
    results[dieType] = [];

    if (totalRolls > 1000000000 ) {
      throw new Error("Puhleeeze. That's way too many rolls");
    } else if ( dieNum > 1000000000 ) {
      throw new Error("Puhleeeze. There is no die with that many sides.");
    }

    for ( var i = 0; i < totalRolls ; i += 1 ) {

      roll = Math.floor(Math.random() * dieNum) + 1;
      total += roll;
      results[dieType].push( roll );
    }
  });
  results.str = str;
  results.total = total;
  return results;
}
var testString = window.location.search.substr(1);
console.log(rollParser(testString));
