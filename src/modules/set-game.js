// Set game ID
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