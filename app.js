import { renderStat, renderGame } from './utils.js';

const form = document.getElementById('add-stat');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = new FormData(form);
    let user = {
        player: userData.get('player'),
        points: userData.get('points'),
    };
    stats.push(user);
    renderStats();
    form.reset();
});

remove.addEventListener('click', () => {
    stats.pop(); 
    renderStats();
});

save.addEventListener('click', () => {
    let sumPoints = 0;
    for (let iOfStats of stats){
        sumPoints += Number(iOfStats.points);
    }
    let game = {
        number: games.length + 1,
        totalPoints: sumPoints,
    };
    games.push(game);
    renderGames();
    resetStats();
});
