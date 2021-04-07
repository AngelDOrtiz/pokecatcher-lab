import { getPokedex } from '../local-storage-utils.js';

const pokedex = getPokedex();
const resetButton = document.getElementById('resetButton');

var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: 'Pokemon Captured',
                data: captured,
                backgroundColor: [
                    'red'
                ],
                borderColor: [
                    'blue'
                ],
                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data: encountered,
                backgroundColor: [
                    'blue'
                ],
                borderColor: [
                    'red'
                ],
                borderWidth: 1
            },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

resetButton.addEventListener('click', () => {
    localStorage.clear();
    window.location = '../index.html';
});