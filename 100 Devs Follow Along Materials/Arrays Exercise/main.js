// let movies = ['Wolf Of Wall Street', 'Interstellar', 'Deadpool'];

// movies.forEach(movie => {
//     console.log(movie)
// });

// movies.push('Ghostbusters');
// console.log(movies[3])

// movies.unshift('Pacific Rim');
// console.log(movies[0]);


// movies.pop();
// console.log(movies.length);
// console.log(movies);

let musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}

musketeers.push(`D'Artagnan`);
console.log(musketeers[3]);

musketeers.forEach(musketeer => {
    console.log(musketeer)
});

musketeers.splice(2, 1);
console.log(musketeers);

for (let musketeer of musketeers){
    console.log(musketeers)
}

let values = [3, 11, 7, 2, 9, 10];

console.log(
    [3,11,7,2,9,10].reduce((a, b) => a + b, 0)
)

console.log(Math.max(3,11,7,2,9,10));

// let words = ['go', 'dont go', 'please go', 'stop'];

// for (let i = 0; i <= 'stop'; i++){
//     console.log(words)
// }

// Could not figure this last one out.

