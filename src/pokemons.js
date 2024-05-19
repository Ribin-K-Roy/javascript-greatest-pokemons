import pokemons from 'src\data.js' 


const log = console.log;
// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

// Function to get all Fire-type Pokemon
function getAllFirePokemons(pokemon) {
    return pokemon.filter((val) => val.type.includes('Fire'));
  }
  const firePokemons = getAllFirePokemons(pokemons);
  log("Fire Pokemons:", firePokemons);
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortest_Pokemon(pokemon){

    if(pokemon.length==0){
       return 0
    }

    let new_pokemon = pokemon.map((val)=>{
        return {
            name:val.name,
            height: parseFloat(val.height)
        }
    })
    let newSortedpokemon = new_pokemon.sort((a,b)=>{

        if(a.height < b.height){
            return -1;
        }else if(a.height > b.height){
            return 1;
        }else{
            return 0;
        }  
    })

    const shortestheight = newSortedpokemon[0].name;
    return shortestheight;

}
const shp = shortest_Pokemon(pokemons);
log("Shortest Pokemon:", shp);


// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemon){

    if(pokemon.length==0){
        return 0
     }

    let total = pokemon.reduce((sum,val)=>{

        return sum = sum + val.candy_count
     },0)

    let avgCandy_count = Number((total/pokemon.length).toFixed(2)) 

    return avgCandy_count;
}
const avg = candyAverage(pokemons);
log("Candy count for all the pokemon",avg);

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGround_Pokemon(pokemon){

    if(pokemon.length==0){
        return 0
    }

    let images = [];

    let GroundPokemons = pokemon.filter((val)=>{
        return val.type.includes('Ground');
    })
    for(let i=0; i<10; i++){
        images.push(GroundPokemons[0].img);
    }
    return images;    

}
const Ground_Pokemon = getGround_Pokemon(pokemons);
log("Ground pokemon:",Ground_Pokemon);


// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavy_Pokemons(pokemon){

    if(pokemon.length==0){
        return 0
    }

    let pikachuWeight;

        let Pikachu = pokemon.filter((val)=>{
            return val.name==='Pikachu'
        });

        pikachuWeight = parseFloat(Pikachu[0].weight);

        let heavyPokemons = pokemon.filter((val)=>{
            return parseFloat(val.weight) > pikachuWeight;
        })

        let heavierPokemonNames = heavyPokemons.map((val)=>{
            return val.name;
        })
        return heavierPokemonNames;

}
const heavyPokemons=getHeavy_Pokemons(pokemons);
log ("Pokemon heavier than pikachu:",heavyPokemons);


// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function order_alphabetically(pokemon){

    if(pokemon.length==0){
        return 0
    }

    let thepokemon = [...pokemon];

    thepokemon.sort((a, b)=>{

        if(a.name < b.name){
            return -1;
        }else if(a.name > a.name){
            return 1;
        }else{
            return 0;
        }
    });
    let pokemonNames = thepokemon.map((val)=>{
        return val.name;

    }).slice(0,20)

    return pokemonNames;

}
const Order=order_alphabetically(pokemons);
log("Alphabetically ordered pokemon:",Order);
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemon) {
    if (pokemon.length === 0) {
      return [];
    }
  
    const strongCandidates = pokemon.filter((val) => val.weaknesses.length === 1);
    return strongCandidates.slice(0, 15); 
}
const strongPokemon = strongPokemons(pokemons);
log("Strong pokemons:",strongPokemon);