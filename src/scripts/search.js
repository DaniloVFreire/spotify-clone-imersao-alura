const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

/**
 * Makes a request to the API based on the search term and displays the results.
 *
 * @param {string} searchTerm - The term to search for in the API.
 * @return {void}
 */
function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url) //?name_like=${searchTerm} _search
    .then((response) => response.json())
    .then((results) => displayResults(results));
}
/**
 * Display the results by updating the artist image and name based on the provided results.
 *
 * @param {array} results - The array of results containing the artist image URL and name.
 * @return {void} No return value
 */
function displayResults(results) {
  console.log(results);
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value; //.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});
