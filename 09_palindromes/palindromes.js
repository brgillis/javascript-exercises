const palindromes = function (a) {
  a = a.replace(/[^0-9a-z]/gi, '')
  for(let i=0; i<a.length; ++i)
  {
    if (a[i].toLowerCase() != a.at(-i-1).toLowerCase()) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
