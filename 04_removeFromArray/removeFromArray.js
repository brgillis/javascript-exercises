const removeFromArray = function(aInput, oToRemove) {
  // Use the array's `splice` method to remove elements found to equal the element to remove
  for(i=0; i<aInput.length; ++i) {
    if (aInput[i]===oToRemove) {
      aInput.splice(i, 1);
    }
  }

  return aInput;
};

// Do not edit below this line
module.exports = removeFromArray;
