function toRoman(num) {
    let result = '';
    let roman = {'M' : 1000,
    'D' : 500,
    'C' : 100,
    'L' : 50,
    'XL': 40,
    'X' : 10,
    'IX': 9,
    'V' : 5,
    'IV': 4,
    'I': 1};
    for(let key in roman) {
        while(roman[key] <= num) {
            result += key;
            num-=roman[key];
        } 
    }
    return result;
} 

console.log(toRoman(4));
console.log(toRoman(9));
console.log(toRoman(23));