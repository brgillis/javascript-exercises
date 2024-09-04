const sumAll = function(iLow, iHigh) {

  // Check for valid order, and swap if not
  if(iHigh<iLow){
    [iLow, iHigh] = [iHigh, iLow];
  }

  let iResult = 0;
  for (let i = iLow; i<=iHigh; ++i) {
    iResult += i;
  }
  return iResult;
};

// Do not edit below this line
module.exports = sumAll;
