import './styles/main.scss';
import './modules/set-game.js';
import { setValues, dataWait, reloadList } from './modules/scores.js';
import Player from './modules/player-score.js';

// DOM variables
const boardContainer = document.getElementById('scoreContainer');
const nameIn = document.getElementById('nameIn');
const scoreIn = document.getElementById('scoreIn');
const addBtn = document.getElementById('addBtn');
const refreshBtn = document.getElementById('refresh');
const mesg = document.querySelector('.message');
// API variables
const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = 'Gofo0FioUhH1t86Rl6tF';
const urlId = `${urlAPI}${id}/scores/`;

// Event to add new score
addBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await reloadList('score-li');
  mesg.innerHTML = 'Uploding your new score...';
  const player = new Player(nameIn.value, scoreIn.value);
  await dataWait(urlId, player, boardContainer);
  mesg.innerHTML = 'Yor data was saved!';
  nameIn.value = '';
  scoreIn.value = '';
});

// Event to refresh data
refreshBtn.addEventListener('click', async () => {
  await reloadList('score-li');
  setValues(urlId, boardContainer);
});
