const getCharacters = async () => {
const apiResult = await fetch("https://rickandmortyapi.com/api/character");
const data = await apiResult.json();
const characters = data.results;
const info = data.info;
}