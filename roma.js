var alfa = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
}

function toRoman(num){
    var result = ''
    var count = 0
    for(key in alfa){
        while(num - alfa[key]>=0 ){
            num -= alfa[key]
            result += key
            if(count>3){
                count = 0
                break;
            }
        }
    }
    return result
}

console.log(toRoman(1));
console.log(toRoman(11));
console.log(toRoman(111));
console.log(toRoman(1111));