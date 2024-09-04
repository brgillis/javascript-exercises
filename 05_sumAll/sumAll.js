const sumAll = function(iLow, iHigh) {
  let iResult = 0;
  for (let i = iLow; i<=iHigh; ++i) {
    iResult += i;
  }
  return iResult;
};

// Do not edit below this line
module.exports = sumAll;
