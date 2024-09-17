// code for the API

document.getElementById('searchBtn').addEventListener('click', () => {
  const animeTitle = document.getElementById('animeTitle').value;

  fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeTitle)}&sfw`)
      .then(response => response.json())
      .then(data => {
          const resultsDiv = document.getElementById('results');
          resultsDiv.innerHTML = ''; // Clear previous results

          if (data.data && data.data.length > 0) {
              // Loop through the anime results
              data.data.forEach(anime => {
                  // Create a container for each anime result
                  const animeContainer = document.createElement('div');
                  animeContainer.style.marginBottom = '20px';

                  // Create and add the anime title
                  const animeTitle = document.createElement('h3');
                  animeTitle.textContent = anime.title;
                  animeContainer.appendChild(animeTitle);

                  // Create and add the anime image
                  const animeImage = document.createElement('img');
                  animeImage.src = anime.images.jpg.image_url;
                  animeImage.style.width = '150px';
                  animeContainer.appendChild(animeImage);

                  // Append the anime container to the results div
                  resultsDiv.appendChild(animeContainer);
              });
          } else {
              // Show a message if no results are found
              resultsDiv.innerHTML = '<p>No results found</p>';
          }
      })
      .catch(err => {
          console.error('Error:', err);
          document.getElementById('results').innerHTML = '<p>Error fetching data</p>';
      });
});

