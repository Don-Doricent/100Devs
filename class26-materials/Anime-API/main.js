// code for the API

document.querySelector('button').addEventListener('click', getAnime)

function getAnime(){
    let anime = document.querySelector('input').value

    fetch(`https://kitsu.io/api/edges=${anime}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.anime)
      document.querySelector('h2').innerText = data.anime[0].strDrink
      document.querySelector('img').src = data.anime[0].strDrinkThumb
      document.querySelector('h3').innerText = data.anime[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

