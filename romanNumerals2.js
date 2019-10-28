var dict = [
  [1000, 'M'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function toRoman(num) {
  // var temp = [];
  var results = '';

  for(var i in dict) {
    while(true) {
      if(num%dict[i][0] != num) {
        results += dict[i][1];
        num -= dict[i][0];
      }
      else break;
    }
  }

  return results;
}

console.log('My totally sweet testing script\n');
console.log('input | expected  | actual');
console.log('------|-----------|----')
console.log('4     | IV        | ', toRoman(4));
console.log('9     | IX        | ', toRoman(9));
console.log('23    | XXIII     | ', toRoman(23));
console.log('1453  | MCDLIII   | ', toRoman(1453));
console.log('1646  | MDCXLVI   | ', toRoman(1646));