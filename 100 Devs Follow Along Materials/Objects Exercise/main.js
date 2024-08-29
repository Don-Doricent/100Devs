const pen = {
    type: 'ballpoint',
    color: 'blue',
    brand: 'Bic'
};

console.log(pen.type);
console.log(pen.color);
console.log(pen.brand);

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.color = 'red';

console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type} pen`);

pen.price = '2.5';

console.log(`My pen costs ${pen.price} dollars`);


let fyeBeast = {
    name: 'FyeBeast',
    health: 150,
    strength: 25,
    xp: 0
};

console.log(`${fyeBeast.name} has ${fyeBeast.health} health points and ${fyeBeast.strength} for strength`);

// FyeBeast is harmed by an arrow

fyeBeast.health -= 20;

// FyeBeast equips a strength necklace

fyeBeast.strength += 10;

console.log(`${fyeBeast.name} has ${fyeBeast.health} health points and ${fyeBeast.strength} for strength`);

// return character description

function describe(character) {
    return `${fyeBeast.name} has ${fyeBeast.health} health points and ${fyeBeast.strength} for strength`
}

console.log(describe(fyeBeast)); // the code above makes it easier to describe whats happening in less code.

// below is an alternative approach, using a describe() property inside the object

// const fyeBeast = {
//     name: "FyeBeast",
//     health: 150,
//     strength: 25,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points and ${this
//         .strength} as strength`;
//     }
//   };
  
//   console.log(aurora.describe());


// FyeBeast Learned a new skill

fyeBeast.xp += 15;

console.log(`${fyeBeast.name} has ${fyeBeast.health} health points and ${fyeBeast.strength} for strength. That boy ALSO GOT ${fyeBeast.xp} XP POINTS!!`);

let dog = {
    name: 'Rocket',
    species: 'PitBull',
    size:'6 ft',
    bark: 'AAAARRRRRFFFFF!!!'
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);

const r = Number(prompt("Enter the circle radius:"));

let circle = {
    circumference: '60 degrees',
    area: '45 degrees'
}

console.log(`Its circumference is ${circle.circumference}`);


