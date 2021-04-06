import { findByPokemonName } from './utils.js';
import { presentThreePokemon } from './data-utils.js';
import { capturePokemon, getPokedex } from './local-storage-utils.js';

const pokeBall = document.querySelector('button');

function createPokemonSelect() {
    const pokeRadio1 = document.querySelector('#radio-1');
    const pokeRadio2 = document.querySelector('#radio-2');
    const pokeRadio3 = document.querySelector('#radio-3');

    const pokeLabel1 = document.querySelector('#label1');
    const pokeLabel2 = document.querySelector('#label2');
    const pokeLabel3 = document.querySelector('#label3');

    const threePokemon = presentThreePokemon();

    const img1 = document.querySelector('#poke-img1');
    
    img1.src = threePokemon[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = threePokemon[0].pokemon;
    
    const img2 = document.querySelector('#poke-img2');
    
    img2.src = threePokemon[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = threePokemon[1].pokemon;
    
    const img3 = document.querySelector('#poke-img3');

    img3.src = threePokemon[2].url_image;
    pokeLabel3.append(img1);
    pokeRadio3.value = threePokemon[2].pokemon;
}

createPokemonSelect();
let totalCaptures = 0;

pokeBall.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input:checked');
    console.log(selectedPokemon);
    const pokeObject = findByPokemonName(selectedPokemon.value);
    capturePokemon(pokeObject);
    console.log(pokeObject);
    createPokemonSelect();

    

    totalCaptures++;

    if (totalCaptures === 3) {
        window.location = './results/index.html';
        alert('Thanks for helping professor Oak! Go catch another batch!');
    }
});