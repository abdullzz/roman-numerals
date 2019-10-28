function toRoman(num){
  var res = ''
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  for (var i = arabic.length - 1; i >= 0; i -= 1){
    while (num >= arabic[i]){
      num -= arabic[i]
      res += (roman[i])
    }
  }
  return res
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))

