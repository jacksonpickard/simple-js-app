<<<<<<< Updated upstream
let pokemonRepository = (function () {
  // empty array to load from api
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=120";

  let searchButton = $(".btn btn-secondary");
  searchButton.on("click", function () {
    let pokemonList = $(".pokemon-list");
    pokemonList.empty();
    getByName($(".form-control").val()).forEach(function (pokemon) {
      addListItem(pokemon);
    });
  });

  let searchBar = $(".form-control");
  searchBar.on("keypress", function () {
    let pokemonList = $(".pokemon-list");
    pokemonList.empty();
    getByName($(".form-control").val()).forEach(function (pokemon) {
      addListItem(pokemon);
    });
  });

  function getAll() {
    return pokemonList;
  }

  //adds pokemon with .push, if object
  function add(pokemon) {
    if ((typeof pokemon === "object") & ("name" in pokemon)) {
      pokemonList.push(pokemon);
    }
  }

  function getByName(search) {
    return pokemonList.filter(function (pokemon) {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  function addListItem(pokemon) {
    let pokemonList = $(".pokemon-list");
    let listPokemon = $(`<li class="list-group-item"></li>`);
    let button = $(
      `<button type = "button" class = "pokemon-button btn btn-primary" data-toggle = "modal" data-target = "#pokeModal">${pokemon.name}</button>`
    );

    listPokemon.append(button);
    pokemonList.append(listPokemon);

    button.on("click", function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //load a list of pokemon from api. Promise fetch function.
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        // convert response to json
        return response.json();
      })
      .then(function (json) {
        // api uses 'results' for array of pokemon. Each result, we are calling item. For each item, we assign keys to parameters (items from api)
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          // add function which pushes pokemon if it is object, and has name
          add(pokemon);
        });
        // if any error occurs, it will be cought right here
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //load pokemon details - promise (image, height, type)
  function loadDetails(item) {
    // defining url from json results and then fetching those details
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // details coming from api (all the info on each pokemon) after selecting which detail is needed (sprites, height, types-array)
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
        // any errors will be cought here
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // info to log when pokemon is clicked. Execute loadDetails and pass pokemon as parameter and then executes
  function showModal(pokemon) {
    let types = "";
    pokemon.types.forEach(function (type) {
      types += type.type.name + " ";
    });

    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body");
    modalTitle.empty();
    modalBody.empty();

    modalTitle.append(pokemon.name);
    modalBody.append(`<img class = "modal-img" src = ${pokemon.imageUrl}>`);
    modalBody.append(`<p>Height: ${pokemon.height}</p>`);
    modalBody.append(`<p>Type(s): ${types}</p>`);
    modalBody.append(`<p>Weight: ${pokemon.weight} pounds </p>`);
  }

  function loadAll() {
    loadList().then(function () {
      getAll().forEach(function (pokemon) {
        addListItem(pokemon);
      });
    });
  }

  // all functions to return
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
    loadAll: loadAll,
  };
})();


pokemonRepository.loadAll();
=======
let pokemonList = [
    {name: 'Charizard', height: 1.7, type: ['fire' , 'flying']},
    {name: 'Oddish', height: 0.5, type: ['grass' , 'poison']},
    {name: 'Mr. Mime', height: 1.3, type: ['psychic' , 'fairy']},
];321 
>>>>>>> Stashed changes
