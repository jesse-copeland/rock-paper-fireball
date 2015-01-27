describe("Call computerChoice.generate() to ", function() {
  it("it should return a number between 0 and 2", function() {
    expect(generate()).to.be.within(0,2);  
  });
  
});