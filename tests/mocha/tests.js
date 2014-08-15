
describe("Die", function() {
    describe(" when six sided ", function () {
    var die;
    beforeEach(function () {
      die = makeDie(6);
    });
    it('should have a 1', function () {
      expect(die.lower).to.equal(1);
    });
     it('should have a 6', function () {
      expect(die.upper).to.equal(6);
    });
    it('should have no symbols', function() {
      expect(die.symbols).to.be.false;
    });
    it('should hit all values', function() {
      expect(die).toHitAllValues();
    })
  });
});