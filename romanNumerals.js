function toRoman(num) {
  let hasil = ""

  while(num > 0) {
    if (num >= 1000) {
      num -= 1000
      hasil += "M"
    } else if (num >= 900){
      num -= 900
      hasil += "CM"
    }else if (num >= 500) {
      num -= 500
      hasil += "D"
    } else if (num >= 400){
      num -= 400
      hasil += "CD"
    }else if (num >= 100) {
      num -= 100
      hasil += "C"
    } else if (num >= 90){
      num -= 90
      hasil += "XC"
    }else if (num >= 50) {
      num -= 50
      hasil += "L"
    } else if (num >= 40){
      num -= 40
      hasil += "XL"
    }else if (num >= 10) {
      num -= 10
      hasil += "X"
    } else if (num >= 9){
      num -= 9
      hasil += "IX"
    }else if (num >= 5) {
      num -= 5
      hasil += "V"
    } else if (num >= 4) {
      num -= 4
      hasil += "IV"
    } else if (num >= 1) {
      num -= 1
      hasil += "I"
    }
  }

  return hasil
}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|--------')
console.log('4     | IV       |',toRoman(4))
console.log('9     | IX       |',toRoman(9))
console.log('23    | XXIII    |',toRoman(23))
console.log('1453  | MCDLIII  |',toRoman(1453))
console.log('1646  | MDCXLVI  |',toRoman(1646))
