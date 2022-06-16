// Function to create element
const createLi = (name, score, node) => {
  // set element variables
  const parent = node;
  const li = document.createElement('li');
  const nameSp = document.createElement('span');
  const scoreSp = document.createElement('span');
  // set values and class
  nameSp.innerHTML = `${name}:`;
  scoreSp.innerHTML = score;
  li.classList.add('score-li');
  // append elements
  li.appendChild(nameSp);
  li.appendChild(scoreSp);
  parent.appendChild(li);
};

export default createLi;