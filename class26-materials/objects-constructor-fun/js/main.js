//Create a pizza constructor with 4 properties and 3 methods

function PizzaMachine(size,toppings,crust,sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce

    this.estimatedDeliveryTime = function(){
        console.log('Calculating...');
        
    }
    this.burnMouth = function(){
        console.log('AHHHHHHH!');
        
    }

this.frisbee = function(){
    console.log('YEEEEEEeeeeeeeetttttt');
    
}
}

let pizza = new PizzaMachine('large', ['spinach', 'garlic'], 'deep dish', '')