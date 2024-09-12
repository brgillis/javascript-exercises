const fibonacci = function(x) {
  x = +x;
  if(x<0) return "OOPS";

  // We get exponential growth in complexity if we simply do this recursively.
  // This can be avoided by constructing an array up to the number we need
  a = [0, 1, 1];
  a.length = x+1;
  for (let i=2; i<=x; ++i)
  {
    a[i] = a[i-1] + a[i-2];
  }
  return a[x];
};

// Do not edit below this line
module.exports = fibonacci;
