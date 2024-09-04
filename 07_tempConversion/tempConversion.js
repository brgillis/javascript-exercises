const convertToCelsius = function(fFTemp) {
  return (fFTemp - 32) / 1.8;
};

const convertToFahrenheit = function(fCTemp) {
  return fCTemp * 1.8 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
