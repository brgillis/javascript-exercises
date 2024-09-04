const removeFromArray = function(aInput) {
  // Get an array of the objects to remove from the function's `arguments`, which starts after
  // the first argument.
  const aToRemove = Array.from(arguments);
  aToRemove.shift();

  // Use the array's `splice` method to remove elements found to equal the element to remove
  for(let i=0; i<aInput.length; ++i) {
    for(let j=0; j<aToRemove.length; ++j) {
      if (aInput[i]===aToRemove[j]) {
        aInput.splice(i, 1);
        --i; // Since we remove one element, we'll need to go back one index
        break; // No need to check remaining elements
      }
    }
  }

  return aInput;
};

// Do not edit below this line
module.exports = removeFromArray;
