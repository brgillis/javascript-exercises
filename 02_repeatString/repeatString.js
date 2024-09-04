const repeatString = function(sInputString, iNumTimes) {
  let sOutputString = "";
  for (let i = 0; i < iNumTimes; ++i) {
    sOutputString += sInputString;
  }
  return sOutputString;
};

// Do not edit below this line
module.exports = repeatString;
