function roman(number){
    let output = ''
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var romans = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]
    for(let i = 0; i < arabic.length; i++) {
        while (number%arabic[i] < number) {
            output += romans[i]
            number -= arabic[i]
        }
    }
    return output
};

 console.log(roman(40))