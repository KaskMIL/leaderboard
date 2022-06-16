// Function to swap classes
const swapStyle = (node, classOut, classIn) => {
  node.classList.remove(classOut);
  node.classList.add(classIn);
};

export default swapStyle;