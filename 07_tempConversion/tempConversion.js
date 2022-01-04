const ftoc = function(c) {
  f=Math.round(((c-32)*5/9)*10);
  return f/10;
};

const ctof = function(c) {
  f=Math.round((c*9/5+32)*10);
  return f/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
