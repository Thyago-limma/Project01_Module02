const button = document.getElementById("button")
const name = document.getElementById("name")
const image = document.getElementById("image")
const evolution = document.getElementById("evolution1")
const reset = document.getElementById("reset")
let namePokemon = 1
let choosePokemon = 0
let imagePokemon = 1
let evolutionPokemon = 1
let choose;

const namePokemons = [
    Bulbasaur = [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
    ],
    Charmander = [
        "Charmander",
        "Charmeleon",
        "Charlizard",
    ],
    Squirtle = [
        "Squirtle",
        "Wartortle",
        "Blastoise"
    ]
]

const imagePokemons = [
    Bulbasaur = [
        "./img/001.png",
        "./img/002.png",
        "./img/003.png",
    ],
    Charmander = [
        "./img/004.png",
        "./img/005.png",
        "./img/006.png",
    ],
    Squirtle = [
        "./img/007.png",
        "./img/008.png",
        "./img/009.png",
    ]
]

const evolutionPokemons = [
    Bulbasaur = [
        "Seu pokémon está na evolução inicial.",
        "Parabéns! Seu pokémon evoluiu para Ivysaur.",
        "Parabéns! Seu pokémon evoluiu para Venusaur.",
    ],
    Charmander = [
        "Seu pokémon está na evolução inicial.",
        "Parabéns! Seu pokémon evoluiu para Charmeleon.",
        "Parabéns! Seu pokémon evoluiu para Charizard.",
    ],
    Squirtle = [
        "Seu pokémon está na evolução inicial.",
        "Parabéns! Seu pokémon evoluiu para Wartortle.",
        "Parabéns! Seu pokémon evoluiu para Blastoise.",
    ]
]

function iniciar() { 
    const pokemons = document.getElementsByClassName('pokemon-body1');

    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemon.addEventListener('click', select)
    }
}

function select(event){
    const selectPokemon = event.target.parentElement 
    const father = selectPokemon.parentElement 
    const child = father.children 

    for (let i=0; i < child.length; i++){
        child[i].classList.remove('select') 
    }

    selectPokemon.classList.add('select') 

    var idPokemon = selectPokemon.id
    var selectId = father.getAttribute('name')
    
    if (selectId == 'pokemons'){
        choose = idPokemon

    }

    if (choose == "Bulbasaur") {
        choosePokemon = 0
        name.innerHTML = namePokemons[0][0]
        image.src = imagePokemons[0][0]
        evolution.innerHTML = evolutionPokemons[0][0]
    }
    else if (choose == "Charmander") {
        choosePokemon = 1
        name.innerHTML = namePokemons[1][0]
        image.src = imagePokemons[1][0]
        evolution.innerHTML = evolutionPokemons[1][0]
    }
    else {
        choosePokemon = 2
        name.innerHTML = namePokemons[2][0]
        image.src = imagePokemons[2][0]
        evolution.innerHTML = evolutionPokemons[2][0]
    }
}

button.addEventListener("click", function() {
    console.log(imagePokemon)

    if (!choose) {
        alert("Primeiro, escolha um pokémon.")
    }
    else if (imagePokemon < 3) {
        name.innerHTML = namePokemons[choosePokemon][namePokemon]
        image.src = imagePokemons[choosePokemon][imagePokemon]
        evolution.innerHTML = evolutionPokemons[choosePokemon][evolutionPokemon]

        namePokemon++
        imagePokemon++
        evolutionPokemon++

    }
    else {
        namePokemon = 0
        imagePokemon = 0
        evolutionPokemon = 0

        name.innerHTML = namePokemons[choosePokemon][namePokemon]
        image.src = imagePokemons[choosePokemon][imagePokemon]
        evolution.innerHTML = evolutionPokemons[choosePokemon][evolutionPokemon]

        namePokemon++
        imagePokemon++
        evolutionPokemon++
    }

})