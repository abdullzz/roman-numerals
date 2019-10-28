let ref = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

function toRoman(n) {
  if (n < 1 || n >= 4000) {
    return 'Invalid Input';
  } else {
    let result = '';
    for (let key in ref) {
      while (n >= ref[key]) {
        result += key;
        n -= ref[key];
      }
    }
  return result;
  }
}

console.log(toRoman(1111));