// code for the API

fetch("https://api.anidb.net:9001/httpapi?request=anime")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

