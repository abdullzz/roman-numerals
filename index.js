let romans = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
]

function toRoman(number) {
    let resultConvert = ''
    let count = 0
    while (number !== 0) {
        if (number >= romans[count][0]) {
            resultConvert += romans[count][1]
            number -= romans[count][0]
        } else {
            count++
        }
    }
    return resultConvert
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1649))