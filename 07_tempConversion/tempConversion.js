const convertToCelsius = function(fFTemp) {
  fPreciseResult = (fFTemp - 32) / 1.8;
  return Math.round(fPreciseResult*10)/10;
};

const convertToFahrenheit = function(fCTemp) {
  fPreciseResult = fCTemp * 1.8 + 32;
  return Math.round(fPreciseResult*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
