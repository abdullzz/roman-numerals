function numberDevider (number) {
  let devider = [1000, 100, 10, 1]
  let result = []

  for (let num of devider) {
    if (number / num >= 1) {
      result.push(
        {
          number: Math.floor(number / num) * num,
          devidedBy: num,
          multiplier: Math.floor(number / num)
        }
      )
      number -= Math.floor(number / num) * num
    }
  }

  return result
}

function convertToRoman(numberList) {
  let romans = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M',
  }

  let result = ''

  for (let number of numberList) {
    if (number.multiplier === 4 || number.multiplier === 9) {
      result += romans[number.devidedBy * number.multiplier]
    } else if (number.multiplier < 4) {
      result += romans[number.devidedBy].repeat(number.multiplier)
    } else if (number.multiplier > 5) {
      result += romans[number.devidedBy * 5] + romans[number.devidedBy].repeat(number.multiplier - 5)
    } else {
      result += romans[number.number]
    }
  }

  return result
}

function toRoman (number) {
  if (number <= 0 || number > 3000) {
    return 'Can only input number from 1 to 3000'
  }

  let devider = numberDevider(number)

  return convertToRoman(devider)
}

console.log('My totally sweet testing script\n')
console.log('input  |  expected  | actual')
console.log('_____________________________')
console.log('4      | IV         |', toRoman(4))
console.log('9      | IX         |', toRoman(9))
console.log('23     | XXIII      |', toRoman(23))
console.log('1453   | MCDLIII    |', toRoman(1453))
console.log('1646   | MDCXLVI    |', toRoman(1646))
