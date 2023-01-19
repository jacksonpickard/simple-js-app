
let pokemonRepository = (function () {

    let pokemonList = [
        { ID: "1", name: 'Charizard', height: 1.7, type: ['fire' , 'flying'], ability: "blaze "},
        { ID: "2", name: 'Oddish', height: 0.5, type: ['grass' , 'poison'], ability: "overgrow" },
        { ID: "3", name: 'Mr. Mime', height: 1.3, type: ['psychic' , 'fairy'], ability:"torrent" },
    ]

function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "ID" in pokemon &&
        "name" in pokemon &&
        "height" in pokemon &&
        "type" in pokemon &&
        "ability" in pokemon
) {
    pokemonList.push(pokemon);
} else {
    console.log("pokemon is not correct");
}
}

function getAll() {
    return pokemonList;
}

function addListItem (pokemon) {
let pokemonRepository = document.querySelector(".pokemon-list");
   let listPokemon = document.createElement('li');
   let button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add("button-class");
   listPokemon.appendChild(button);
   pokemonRepository.appendChild(listPokemon);
   button.addEventListener("click", (Event) => showDetails(pokemon));
}

function showDetails (pokemon) {
    console.log(pokemon);
}


return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    };
})();


pokemonRepository.getAll().forEach(function(pokemon){
   pokemonRepository.addListItem(pokemon);
});


// for loop: was made obsolete by forEach loop

// for (let i = 0; i<pokemonList.length; i++){
//     document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
// if (pokemonList[i].height >= 1.5){
//     document.write(" Wow, that's big!!") + "</p>"
//     }
// }