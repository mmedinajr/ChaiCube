//Example 1 - Mocha & Chai Testing Cube Class
/*
class Cube {
    constructor(length) {
    this.length = length;
    }
    
    getSideLength () {
    return this.length;
    }
    
    getSurfaceArea () {
    return (this.length * this.length) * 6;
    }
    
    getVolume () {
    return Math.pow(this.length,3);
    }
    }
    
    module.exports = {
    Cube:Cube
    } 
*/
//Example 2 - Chef Example-------------------------------------------------------------------------------
//Here, we have a Chef which can cook all the dishes mentioned in the dishes array.
     var Chef = function(){
        this.dishes = ['Dosa', 'Tea', 'Pokoras', 'Pav Bhaji'];
        this.customers = 5; //add custmers
    };
    Chef.prototype.checkMenu= function(){
        //returns a string
        //returns a random dish from the dishes array
        let dish = this.dishes[Math.floor(Math.random() * this.dishes.length)]; //To Fail add interger 3
    
        console.log("I will like to have:", dish);
        return dish;
    };
    /*Added a new functionality to our chef, the number of customers he can cook for in a day. 
    He can serve five customers in his restaurant, which is described in the customersFed function. 
    We serve customers till they become more than five, and return a message accordingly when the chef can't cook anymore.*/

    Chef.prototype.customersFed= function(){

        if(this.customers >=1){
    
            console.log("Customer fed with yummy food!");
            this.customers--;
    
        }
        else if(this.customers == 0)
        {
            console.log("All customers have been satisfied. Done for the day! " + this.customers);
        }
        else
        {
            let cusLeft= this.customers;
            console.log("Customer fed with yummy food!", cusLeft , "more to go!");
            this.customers-= cusLeft;
        }

        
        
    
        return this.customers;  
    };


    let chef = new Chef();
    
    module.exports = chef; 