//Write your pseduo code first! 

// 0 -> 32
document.querySelector('#yell').addEventListener('click', convert)

function convert() {
    // need the value that is celsius
    let temp = document.querySelector('#sel').value
    // convert from C to F
    temp = temp * 9/5 + 32
    // show

    document.querySelector('#placeToYell').innerText = temp
}
