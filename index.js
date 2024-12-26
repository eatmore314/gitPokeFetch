async function fetchData() {
  try {
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  if(!response.ok){
    throw new Error("Couldnt Fetch Error")
  }
  const data = await response.json();
  const pokemonSprite = data.sprites.front_default;
  const pokemonImage = document.getElementById("pokemonSprite");
  pokemonImage.src = pokemonSprite;
  pokemonImage.style.display = "block"
  }
  catch(error){
   console.error(error)
  }
}