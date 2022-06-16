// Set game ID
// function setId(id, url) {
//   if(id) {
//     fetch(url, {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'Call of Duty'
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => id.push(json));
//   }
// };
const createGame = async(url, game) => {
  const gamesContainer = [];
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: game
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  const data = await response.json();
  data.forEach(element => {
    gamesContainer.push(element.result)
  });
  return gamesContainer;
}

export default createGame;