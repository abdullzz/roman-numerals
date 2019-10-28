function toRoman (num){

    var res=''
    
    var roman = {
        
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'X' : 10,
        'IX' : 9,
        'V':5,
        'IV': 4,
        'I': 1
    }


    var keys = Object.keys(roman)
    for(let i = 0; i<keys.length;i++){
        // var found = false 
        while(num >= roman[keys[i]]){
                num -=roman[keys[i]];
                res += keys[i]
        }
    }
    
    // var arr = a.toString().split('')
    // console.log(arr[0]);
    
    // if (arr.length == 4){
    //     res +=romanRibuan[(arr[0]-1)]
    //     res +=romanRatusan[(arr[1]-1)]
    //     res +=romanPuluhan[(arr[2]-1)]
    //     res +=romanSatuan[(arr[3]-1)]
    // }
    
    // if(arr.length == 3){
    //     res +=romanRatusan[(arr[0]-1)]
    //     res +=romanPuluhan[(arr[1]-1)]
    //     res +=romanSatuan[(arr[2]-1)]
    // }
    
    // if(arr.length == 2){
    //     res +=romanPuluhan[(arr[0]-1)]
    //     res +=romanSatuan[(arr[1]-1)]
    // }
    
    // if(arr.length == 1){
    //     res +=romanSatuan[(arr[0]-1)]
    // }
    return res; 

}

console.log(toRoman(40));
    
