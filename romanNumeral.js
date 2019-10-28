var dict = {
    1000: 'M',
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    
}

function toMethod(num) {
    var keys = Object.keys(dict).reverse();
    var values = Object.values(dict).reverse();
    var result = '';
    for (var i = 0; i < keys.length; i++) {
        while (num >= Number(keys[i])) {
            result += values[i];
            num -= Number(keys[i]);
        }
    }
    return result;
}

console.log(toMethod(4));
console.log(toMethod(9));
console.log(toMethod(23));
console.log(toMethod(1453));
console.log(toMethod(1646));




















/* 
    var numbers = decompose(num);
    var result = '';
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1000) {
            result += 'M';
        } else if (numbers[i] === 500) {
            result += 'D';
        } else if (numbers[i] === 100) {
            result += 'C';
        } else if (numbers[i] === 50) {
            result += 'L';
        } else if (numbers[i] === 10) {
            result += 'X';
        } else if (numbers[i] === 5) {
            result += 'V';
        } else if (numbers[i] === 1) {
            result += 'I';
        } else if (numbers[i] === 900) {
            result += 'CM';
        } else if (numbers[i] === 400) {
            result += 'CD';
        } else if (numbers[i] === 40) {
            result += 'XL';
        }
    }
    return result;

*/