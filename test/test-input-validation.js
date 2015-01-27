describe("Pass string to input-validation", function() {

  it("should return rock when 'r' is passed", function() {
    var testString = 'r';
    expect(inputValidation(testString)).to.equal('rock');
    
  });
    it("should return paper when 'p' is passed", function() {
    var testString = 'p';
    expect(inputValidation(testString)).to.equal('paper');
    
  });
    it("should return fireball when 'f' is passed", function() {
    var testString = 'f';
    expect(inputValidation(testString)).to.equal('fireball');
    
  });
    it("should return fireball when 'fire ball' is passed", function() {
    var testString = 'fire ball';
    expect(inputValidation(testString)).to.equal('fireball');
    
  });
});