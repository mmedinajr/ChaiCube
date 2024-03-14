//Test Case 1 - To test Cube Class
const Cube = require('../src/app').Cube;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
it('1. The side length of the Cube', function(done) {//idividual test it()
let c1 = new Cube(2);
expect(c1.getSideLength()).to.equal(2);
done();
});

it('2. The surface area of the Cube', function(done) {
let c2 = new Cube(5);
expect(c2.getSurfaceArea()).to.equal(150);//update Pass 150
done();
});

it('3. The volume of the Cube', function(done) {
let c3 = new Cube(7);
expect(c3.getVolume()).to.equal(343);//Update pass 343
done();
});

}); //end of Square Test
