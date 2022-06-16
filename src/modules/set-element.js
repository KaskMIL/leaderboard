// Function to create element
function createLi(name, score, node) {
  // set element variables
  const parent = node;
  const li = document.createElement('li');
  const nameSp = document.createElement('span');
  const scoreSp = document.createElement('span');
  // set values
  nameSp.innerHTML = name;
  scoreSp.innerHTML = score;
  // append elements
  li.appendChild(nameSp);
  li.appendChild(scoreSp);
  parent.appendChild(li);
}

export default createLi;