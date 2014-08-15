describe("Die", function() {
  
  beforeEach(function () {

  jasmine.Expectation.addMatchers({

    toHitAllValues : function() {
      return {
        compare: function (actual) {
            var totalValues = actual.upper - actual.lower + 1;
            var values = {};
            for (var i = 0; i < totalValues * 10; i ++) {
              var roll = actual.roll();
              if (values[roll] === undefined) {
                values[roll] = 1
              } else {
                values[roll] += 1;
              }
            }
           console.log(values);
           pass = (Object.keys(values).length === totalValues);
           return {
             pass: pass,
             message: 'Expected all values to hit.'
           };
           }
      }; // end return
    } // end hitAllValues

  }); // end addMatchers

}); // end beforeEach
 

  describe(" when six sided ", function () {
    var die;
    beforeEach(function () {
      die = makeDie(6);
    });
    it('should have a 1', function () {
      expect(die.lower).toBe(1);
    });
    it('should have a 6', function () {
      expect(die.upper).toBe(6);
    });
    it('should have no symbols', function() {
      expect(die.symbols).toBeFalsy();
    });
    it('should hit all values', function() {
      expect(die).toHitAllValues();
    })
  });



  describe(" when twenty sided ", function () {
    var die;
    beforeEach(function () {
      die = makeDie(20);
    });
    it('should have a 1', function () {
      expect(die.lower).toBe(1);
    });
    it('should have a 20', function () {
      expect(die.upper).toBe(20);
    });
    it('should have no symbols', function() {
      expect(die.symbols).toBeFalsy();
    });
    it('should hit all values', function() {
      expect(die).toHitAllValues();
    })
  });

  describe(" when 2-4 sided ", function () {
    var die;
    beforeEach(function () {
      die = makeDie(2,4);
    });
    it('should have a 2', function () {
      expect(die.lower).toBe(2);
    });
    it('should have a 4', function () {
      expect(die.upper).toBe(4);
    });
    it('should have no symbols', function() {
      expect(die.symbols).toBeFalsy();
    });
    it('should hit all values', function() {
      expect(die).toHitAllValues();
    })
  });

  describe(" when -10 to 100 ", function () {
    var die;
    beforeEach(function () {
      die = makeDie(-10,100);
    });
    it('should have a -10', function () {
      expect(die.lower).toBe(-10);
    });
    it('should have a 100', function () {
      expect(die.upper).toBe(100);
    });
    it('should have no symbols', function() {
      expect(die.symbols).toBeFalsy();
    });
    it('should hit all values', function() {
      expect(die).toHitAllValues();
    })
  });

  describe(" when custom ", function () {
    var die;

    var faces = [
                'fandooble',
                'red dragon', 
                'wizard', 
                'knight', 
                'green dragon', 
                'gold'];

    beforeEach(function () {
      die = makeDie(faces);
    });
    it('should have a 1', function () {
      expect(die.lower).toBe(1);
    });
    it('should have a ' + faces.length, function () {
      expect(die.upper).toBe(faces.length);
    });
    it('should have custom symbols', function() {
      expect(die.symbols).toBeTruthy();
    });
    it('should hit all values', function() {
      expect(die).toHitAllValues();
    })
  });

});