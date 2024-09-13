//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = 'large'
pizza.toppings = ['spinach', 'onion', 'jalapenos', 'banana peppers', 'garlic']
pizza.crust = 'stuffed'
pizza.sauce = 'heavy'

pizza.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}

pizza.burnMouth = function(){
    console.log('AHHHHH!!!')
}

pizza.frisbee = function(){
    console.log('YEEEeeeetttt')
}

// What do you do when you want to add a new pizza? USE A CONSTRUCTOR TO ADD IT

function TypePizza(pizzaSize, pizzaToppings, pizzaCrust, pizzaSauce){
    this.size = pizzaSize
    this.toppings = pizzaToppings
    this.crust = pizzaCrust
    this.sauce = pizzaSauce
}

