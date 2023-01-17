
let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Charizard', height: 1.7, type: ['fire' , 'flying']},
        {name: 'Oddish', height: 0.5, type: ['grass' , 'poison']},
        {name: 'Mr. Mime', height: 1.3, type: ['psychic' , 'fairy']},
    ];

function add(pokemon) {
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
    };
})();

// for (let i = 0; i<pokemonList.length; i++){
//     document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
// if (pokemonList[i].height >= 1.5){
//     document.write(" Wow, that's big!!") + "</p>"
//     }
// }

pokemonRepository.getAll().forEach(function(pokemon){
    document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
});