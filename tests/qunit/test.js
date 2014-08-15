
module('6 Sided', {
  setup : function () {
    dieObj = makeDie(1,6)
  }
});
test('Lowest number is 1', function () {
  strictEqual(dieObj.lower, 1, "Must be 1");
});
test('Highest number is 6', function (assert) {
  strictEqual(dieObj.upper, 6, "Must be 6");
});
test('No faces', function (assert) {
  strictEqual(dieObj.faces, false, "Should have no faces");
});
test('Hits all values', function () {
  var values = [];
  for (var i = 0; i < 100; i++) {
    var roll = dieObj.roll();
    values[roll-1] = true;
  }
  ok(values.length===6);
});


module('12 Sided', {
  setup : function () {
    dieObj = makeDie(1,12)
  }
});
test('Lowest number is 1', function () {
  strictEqual(dieObj.lower, 1, "Must be 1");
});
test('Highest number is 12', function (assert) {
  strictEqual(dieObj.upper, 12, "Must be 12");
});
test('No faces', function (assert) {
  ok(!dieObj.faces, "Should have no faces");
});
test('Hits all values', function () {
  var values = [];
  for (var i = 0; i < 100; i++) {
    var roll = dieObj.roll();
    values[roll-1] = true;
  }
  ok(values.length===12);
});

module('Custom', {
  setup : function () {
    faces = [
                'fandooble',
                'red dragon', 
                'wizard', 
                'knight', 
                'green dragon', 
                'gold'];
    dieObj = makeDie(faces);
  }
});
test('Lowest number is 0', function () {
  strictEqual(dieObj.lower, 0, "Must be 0");
});
test('Highest number is length of array', function (assert) {
  strictEqual(dieObj.upper, faces.length, "Must be length of array");
});
test('Should have faces', function (assert) {
  ok(dieObj.faces, "Should have faces");
});
test('Hits all values', function () {
  var values = [];
  for (var i = 0; i < 100; i++) {
    var roll = dieObj.roll();
    values[roll] = true;
  }
  faces.forEach( function (element, index) {
    ok(values[element]);
  });
});