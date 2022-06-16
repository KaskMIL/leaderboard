import './styles/main.scss';
import './modules/set-element.js';
import './modules/set-game.js';
import { setValues, score, postScore, dataWait } from './modules/scores';
import Player from './modules/player-score.js';
import createGame from './modules/set-game.js';


// DOM variables
const boardContainer = document.getElementById('scoreContainer');
const nameIn = document.getElementById('nameIn');
const scoreIn = document.getElementById('scoreIn');
const addBtn = document.getElementById('addBtn');
const refreshBtn = document.getElementById('refresh');

const urlAPI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const id2 = 'Gofo0FioUhH1t86Rl6tF';
const urlId2 = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Gofo0FioUhH1t86Rl6tF/scores/'




// Event to add new score
addBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const player = new Player(nameIn.value, scoreIn.value);
  dataWait(urlId2, player, boardContainer);

  nameIn.value = '';
  scoreIn.value = '';
})

refreshBtn.addEventListener('click', () => {
  setValues(urlId2, boardContainer);
})


