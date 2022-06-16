// Set game ID
function setId(id, url) {
  if(id) {
    fetch(url, {
  method: 'POST',
  body: JSON.stringify({
    name: 'Call of Duty'
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => id.push(json));
  }
};

export default setId;