const leapYears = function(iYear) {
  if (iYear % 400 === 0) return true;
  if (iYear % 100 === 0) return false;
  if (iYear % 4 === 0) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
