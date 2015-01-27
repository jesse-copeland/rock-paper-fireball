var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var computerChoice = require('../js/computer-choice.js');

describe("Call computerChoice.generate() to ", function() {
  it("it should return a number between 0 and 2", function() {
    expect(computerChoice.generate()).to.be.within(0,2);  
  });
  
});