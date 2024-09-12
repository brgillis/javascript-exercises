function getAgeDiff(personA, personB) {
  let iADeathYear = personA.yearOfDeath;
  let iBDeathYeay = personB.yearOfDeath;

  // If the death year is undefined, set it to the current year to calculate age
  if(iADeathYear==undefined)
    iADeathYear = 2024;
  if(iBDeathYeay==undefined)
    iBDeathYeay = 2024;

  return iADeathYear - personA.yearOfBirth - iBDeathYeay + personB.yearOfBirth;
}

const findTheOldest = function(a) {
  return a.reduce((personA, personB) => {
    let ageDiff = getAgeDiff(personA, personB);
    if (ageDiff>=0)
      return personA;
    else
      return personB;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
