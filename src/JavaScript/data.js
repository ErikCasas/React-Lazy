const Pokemons = [
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    name: "bulbasaur",
    type: "grass",
    id: 1,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    name: "ivysaur",
    type: "grass",
    id: 2,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    name: "venusaur",
    type: "grass",
    id: 3,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    name: "charmander",
    type: "fire",
    id: 4,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
    name: "charmeleon",
    type: "fire",
    id: 5,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
    name: "charizard",
    type: "fire",
    id: 6,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
    name: "metapod",
    type: "bug",
    id: 7,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
    name: "rattata",
    type: "normal",
    id: 8,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
    name: "raticate",
    type: "normal",
    id: 9,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    name: "squirtle",
    type: "water",
    id: 10,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
    name: "wartortle",
    type: "water",
    id: 11,
  },
  {
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
    name: "blastoise",
    type: "water",
    id: 12,
  },
];

export const getAllPokemons = () =>{
   return Promise.resolve(Pokemons);
}

export const getPokemonById = (id) => {
  return Promise.resolve(Pokemons.find((el) => el.id == id));
};




