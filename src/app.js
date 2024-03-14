//Example 1 - Mocha & Chai Testing Cube Class
//Testing commit changes with Git CI workflow tru vscode

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
