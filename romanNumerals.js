function toRoman(num) {
    var obj = [
        {
            number: 1000,
            roman: "M"
        },
        {
            number: 500,
            roman: "D"
        },
        {
            number: 400,
            roman: "CD"
        },
        {
            number: 100,
            roman: "C"
        },
        {
            number: 50,
            roman: "L"
        },
        {
            number: 40,
            roman: "XL"
        },
        {
            number: 10,
            roman: "X"
        },
        {
            number: 9,
            roman: "IX"
        },
        {
            number: 5,
            roman: "V"
        },
        {
            number: 4,
            roman: "IV"
        },
        {
            number: 1,
            roman: "I"
        },
    ]
    var temp = ""
    while (num !== 0) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i]['number'] <= num) {
                temp += obj[i]['roman']
                num -= obj[i]['number']
                break
            }
        }
    }
    return temp
}

console.log("My totally sweet testing script\n")
console.log("input | expected | actual")
console.log("4     | IV       |", toRoman(4))
console.log("9     | IX       |", toRoman(9))
console.log("23    | XXIII    |", toRoman(23))
console.log("1453  | MCDLIII  |", toRoman(1453))
console.log("1646  | MCDXLVI  |", toRoman(1646))
