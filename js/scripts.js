
let pokemonList = [
    {name: 'Charizard', height: 1.7, type: ['fire' , 'flying']},
    {name: 'Oddish', height: 0.5, type: ['grass' , 'poison']},
    {name: 'Mr. Mime', height: 1.3, type: ['psychic' , 'fairy']},
];

for (let i = 0; i<pokemonList.length; i++){
    document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
if (pokemonList[i].height >= 1.5){
    document.write(" Wow, that's big!!") + "</p>"
    }
}