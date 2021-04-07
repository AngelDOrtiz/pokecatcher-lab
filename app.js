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
    pokeLabel3.append(img3);
    pokeRadio3.value = threePokemon[2].pokemon;

    
    pokeLabel1.addEventListener('mouseenter', () => {
        pokeLabel1.classList.add('hover');
    });

    pokeLabel1.addEventListener('mouseleave', () => {
        pokeLabel1.classList.remove('hover');
    });

    pokeLabel2.addEventListener('mouseenter', () => {
        pokeLabel2.classList.add('hover');
    });

    pokeLabel2.addEventListener('mouseleave', () => {
        pokeLabel2.classList.remove('hover');
    });

    pokeLabel3.addEventListener('mouseenter', () => {
        pokeLabel3.classList.add('hover');
    });

    pokeLabel3.addEventListener('mouseleave', () => {
        pokeLabel3.classList.remove('hover');
    });
}

createPokemonSelect();
let totalCaptures = 0;

pokeBall.addEventListener('click', () => {
    const selectedPokemon = document.querySelector('input:checked');

    const pokeObject = findByPokemonName(selectedPokemon.value);
    capturePokemon(pokeObject);

    createPokemonSelect();

    

    totalCaptures++;

    if (totalCaptures === 10) {
        window.location = './results/index.html';
        alert('Thanks for helping professor Oak! Go catch another batch!');
    }
});