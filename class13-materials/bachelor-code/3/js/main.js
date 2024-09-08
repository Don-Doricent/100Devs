const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose ))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

// let hello = 'Hello world!';

// let message;

// message = hello;

// alert(hello);
// alert(message);

// let o = 1;
// let t = 2;

// alert(o + t)

// let admin;
// let name;

// name = 'Nikki';
// admin = name;

// alert(admin);


// let ourPlanet;

// ourPlanet = "Earth";

// let currentVisitor;
// currentVisitor = admin;

// alert('Spoiler Alert, Click:  ' + currentVisitor);

