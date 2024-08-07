//Create an array of movies with at least three movies.

let movies = ['Spider-man', 'Batman', 'Iron-man']

alert(movies)

//Using the array from above, store the first movie in a variable

let firstMovie = movies[1]

//Get the length of the original array and store it in a new variable

let arrLength = (movies.length)
console.log(arrLength)

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?

let lastElement = movies[2]

let bestColors = ['green','blue','yellow','black']

bestColors.forEach((x,i) => console.log(x))