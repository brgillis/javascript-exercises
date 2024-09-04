const reverseString = function(sInput) {
  // Build the reversed string letter-by-letter
  let sOutput = "";
  for (i = sInput.length-1; i>=0; --i)
  {
    sOutput += sInput[i];
  }
  return sOutput;
};

// Do not edit below this line
module.exports = reverseString;
