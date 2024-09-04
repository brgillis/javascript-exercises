const sumAll = function(iLow, iHigh) {
  // Check for valid input
  if(iLow < 0 || iHigh < 0 ||
    !(Object(iLow) instanceof Number) || !(Object(iHigh) instanceof Number) ||
    !Number.isInteger(iLow) || !Number.isInteger(iHigh)) {
    return "ERROR";
  }


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
