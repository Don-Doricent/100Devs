//Write your pseduo code first! 
document.querySelector('h1').addEventListener('click', convert)
// Write a temp converter that will take in a celsius value and convert it to fahrenheit.

function convert(){
    //need the value
    let eneteredVal = Number(document.querySelector('input').value)
    //convert value c to f
    let temp = eneteredVal * 1.8 + 32
    // show value to the user
    document.querySelector('h2').innerText = temp
}