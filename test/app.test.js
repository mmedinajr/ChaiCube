//Test Case 1 - To test Cube Class
/*const Cube = require('../src/app').Cube;
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

*/

/*------------------------------Test Case 2 - To test Chef Class-----------------------------------*/
const Chef = require('../src/app');
const assert = require('chai').assert;


describe('Testing Chef Functions', function(){
   
    let chef = Chef;
    
    it('Check the dish has valid name.', function(){//to skip a test use it.skip
        assert.isString(chef.checkMenu(), 'string');
    })
    
    it('Check for a dish in menu.', function (){
        let dish = chef.checkMenu();
        assert.oneOf(dish, chef.dishes)

    });
    /*Here, we check if the chef can feed more customers by running the customersFed function five times 
    and testing what happens when the customer count reaches 0. We do this by making use of the isAtLeast method, 
    which takes in two parameters, the object to be tested, and its minimum value.*/
    it('Make sure the Chef can feed more.', function(){

        for(var i=0; i<6; i++){
            chef.customersFed();
            assert.isAtLeast(chef.customers, 0); 
        }
        
    });
    
}); //End of Chef Test
