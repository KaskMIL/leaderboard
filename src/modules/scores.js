import {createLi} from './set-element.js'

// Function to post new score on API
const postScore = async (url, obj) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: obj.name,
      score: obj.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
  const serverResponse = response.json();
  return serverResponse;
}

// Function to get scores from API
const getScore = async(url) => {
  // create a new variable that contains the response of the API
  const response = await fetch(url);
  const data = await response.json();
  // returns the data 
  return data;
}

// Function to set the data on DOM
const setValues = (url, node) => {
  // gets the data
  const data = getScore(url);
  data.then((value) => {
    value.result.forEach(element => {
      createLi(element.user, element.score, node);
    });
  })
  return 'Data set';
}

// Function to print and set values
const dataWait = async(url, obj, node) => {
  await postScore(url, obj);
  await setValues(url, node);
  return 'Resolved'
}

export {dataWait, setValues};