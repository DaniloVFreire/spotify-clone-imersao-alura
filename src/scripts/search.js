const resultArtist = document.getElementById('result-artist');
const playlistContainer = document.getElementById('result-playlists');
const searchInput = document.getElementById('search-input');
const containersDiv = document.getElementById('result-artist');

/**
 * Makes a request to the API based on the search term and displays the results.
 *
 * @param {string} searchTerm - The term to search for in the API.
 * @return {void}
 */
function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url) //?name_like=${searchTerm} _search
    .then(response => response.json())
    .then(results => displayResults(results));
}
/**
 * Display the results by updating the artist image and name based on the provided results.
 *
 * @param {array} results - The array of results containing the artist image URL and name.
 * @return {void} No return value
 */
function displayResults(results) {
  console.log(results);
  let cardsContainer = document.getElementById('grid-container');
  if (cardsContainer) {
    containersDiv.removeChild(cardsContainer);
  }
  console.log(results.length);
  if (results.length > 0) {
    createGridAndPopulateCards(results);
  } else {
    artistsNotFoundError;
  }

  hidePlaylists();
  const artistImage = document.getElementById('artist-img');
  const artistName = document.getElementById('artist-name');

  // results.forEach((element) => {
  //   artistImage.src = element.urlImg;
  //   artistName.innerText = element.name;
  // });
  resultArtist.classList.remove('hidden');
}

function artistsNotFoundError() {
  cardsContainer = document.createElement('h2');
  cardsContainer.className = 'not-found';
  cardsContainer.textContent = 'Nenhum artista encontrado';
}

function createGridAndPopulateCards(artists) {
  cardsContainer = document.createElement('div');
  cardsContainer.className = 'grid-container';
  cardsContainer.id = 'grid-container';
  artists.forEach(artist => {
    const cardElement = createArtistCard(artist);
    cardsContainer.appendChild(cardElement);
  });
  containersDiv.appendChild(cardsContainer);
}

function createArtistCard(artist) {
  // Criando os elementos
  const card = document.createElement('div');
  card.className = 'artist-card';
  card.id = `artist-${artist.id}`;

  const cardImgDiv = document.createElement('div');
  cardImgDiv.className = 'card-img';

  const img = document.createElement('img');
  img.src = artist.urlImg;
  img.alt = `Imagem do ${artist.name}`;
  img.className = 'artist-img';

  const playDiv = document.createElement('div');
  playDiv.className = 'play';

  const playIcon = document.createElement('span');
  playIcon.className = 'fa fa-solid fa-play';
  playDiv.appendChild(playIcon);

  cardImgDiv.appendChild(img);
  cardImgDiv.appendChild(playDiv);

  const cardTextDiv = document.createElement('div');
  cardTextDiv.className = 'card-text';

  const artistLink = document.createElement('a');
  artistLink.title = artist.name;
  artistLink.className = 'vst';
  artistLink.href = artist.link;

  const artistNameSpan = document.createElement('span');
  artistNameSpan.className = 'artist-name';
  artistNameSpan.textContent = artist.name;

  const artistCategorySpan = document.createElement('span');
  artistCategorySpan.className = 'artist-categorie';
  artistCategorySpan.textContent = 'Artista';

  cardTextDiv.appendChild(artistLink);
  cardTextDiv.appendChild(artistNameSpan);
  cardTextDiv.appendChild(artistCategorySpan);

  card.appendChild(cardImgDiv);
  card.appendChild(cardTextDiv);

  return card;
}

function hidePlaylists() {
  playlistContainer.classList.add('hidden');
}

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value; //.toLowerCase();
  if (searchTerm === '') {
    resultArtist.classList.add('hidden');
    playlistContainer.classList.remove('hidden');
    return;
  }
  requestApi(searchTerm);
});
