let romawi = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I']
]

function toRoman(num){
    if(num<1 || num>3000){
        return 'Hanya menerima angka 1 sampai 3000'
    }

    // refactored
    res = ''
    for(let roman of romawi){
        while(num>=roman[0]){
            num-=roman[0]
            res+=roman[1]
        }
    }
    return res
    
    // let str = String(num).split('').reverse()
    // let res = []
    
    // for(let i=0;i<str.length;i++){
    //     let number = Number(str[i])
    //     if(i===0){
    //         if(number===9){
    //             res.push('IX')
    //             continue
    //         }
    //         if(number===4){
    //             res.push('IV')
    //             continue
    //         }
    //         if(number-5>=0){
    //             let temp = ''
    //             temp+='V'
    //             number-=5
    //             while(number!==0){
    //                 temp+='I'
    //                 number--
    //             }
    //             res.push(temp)
    //         }
    //         if(number<5){
    //             while(number!==0){
    //                 res.push('I')
    //                 number--
    //             }
    //         }
    //     }

    //     if(i===1){
    //         if(number===9){
    //             res.push('XC')
    //             continue
    //         }
    //         if(number===4){
    //             res.push('XL')
    //             continue
    //         }
    //         if(number-5>=0){
    //             let temp = ''
    //             temp+='L'
    //             number-=5
    //             while(number!==0){
    //                 temp+='X'
    //                 number--
    //             }
    //             res.push(temp)
    //         }
    //         if(number<5){
    //             while(number!==0){
    //                 res.push('X')
    //                 number--
    //             }
    //         }
    //     }

    //     if(i===2){
    //         if(number===9){
    //             res.push('CM')
    //             continue
    //         }
    //         if(number===4){
    //             res.push('CD')
    //             continue
    //         }
    //         if(number-5>=0){
    //             let temp = ''
    //             temp+='D'
    //             number-=5
    //             while(number!==0){
    //                 temp+='C'
    //                 number--
    //             }
    //             res.push(temp)
    //         }
    //         if(number<5){
    //             while(number!==0){
    //                 res.push('C')
    //                 number--
    //             }
    //         }
    //     }

    //     if(i===3){
    //         while(number!==0){
    //             res.push('M')
    //             number--
    //         }
    //     }
    // }
    // return res.reverse().join('')
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))