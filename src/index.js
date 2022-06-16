import './styles/main.scss';
import './modules/set-element.js'
import createLi from './modules/set-element.js';
import './modules/set-game.js'
import setId from './modules/set-game.js';

// DOM variables
const boardContainer = document.getElementById('scoreContainer');
const nameIn = document.getElementById('nameIn');
const scoreIn = document.getElementById('scoreIn');
const addBtn = document.getElementById('addBtn');
let id = [];
const urlId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

setId(id, urlId);
console.log(id)

