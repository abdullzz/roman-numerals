
var obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

function toRoma(num){
    var angka = num
    var res = []
    for ( i in obj){
        while (angka >= obj[i]){
            res.push(i)
            angka = angka - obj[i]
            // if (Math.floor(angka/obj[i]) >= 1){
            //     res.push(i)
            //     angka = angka - obj[i]
            //     if (angka - obj[i] >= 0){
            //         res.push(i)
            //         // angka = angka - obj[i]
            //     }
            // }

        }
        // console.log(angka)
    }
    return res.join('')
}

console.log(toRoma(3))
console.log(toRoma(23))
console.log(toRoma(1453))
console.log(toRoma(1646))
// toRoma(17)
// toRoma(200)