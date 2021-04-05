import { findById } from './utils';

const POKEDEX = 'POKEDEX';

export function getPokedex() {
    const stringPokedex = localStorage.getItem(POKEDEX);

    if (!stringPokedex) return [];

    const parsedPokedex = JSON.parse(stringPokedex);

    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringPokedex);
}

export function encounterPokemon(pokemon) {
    const pokedex = getPokedex();

    const matchingPokedexPoke = findById(pokedex, pokemon.pokemon);

    if (matchingPokedexPoke) {
        matchingPokedexPoke.encountered++;
    } else {
        const newPokedexPoke = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexPoke);
    }

    setPokedex(pokedex);

    return pokedex:
}