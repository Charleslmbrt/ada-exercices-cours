const fetchAllPokemons = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(
      error.message + "La route de tous le pokemons ne fonctionnent pas"
    );
  }
};

const fetchPokemon = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    let data2 = await response.json();
    console.log("data name---->", data2.name);
    return data2;
  } catch (error) {
    console.log(error.message + " la route d'un pokemon ne fonctionne pas");
  }
};

let pokemonName = "";

const getPokemonName = () => {
  pokemonName = document.getElementById("pokemonSearch").value;

  fetchAllPokemons().then((data) => {
    data.results.map((element) => {
      if (pokemonName === element.name) {
        fetchPokemon().then;
        console.log("yipiiiiiiiiii");
      }
    });
  });
  return pokemonName;
};
