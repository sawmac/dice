var Die = function (lower,upper) {
  this.lower = lower;
  this.upper = upper;
}

Die.prototype.roll = function() {
  var roll = Math.floor(Math.random() * this.upper) + this.lower;
  return roll;
}   

var sixSided = new Die(1, 6);

var twelveSided = new Die(1, 12);

var rollCounts = [0,0,0,0,0,0,0,0,0,0,0,0];

for (var i = 1 ; i < 1000 ; i += 1) {
  var roll = twelveSided.roll() - 1;
  rollCounts[roll] += 1;
}

console.log(rollCounts);