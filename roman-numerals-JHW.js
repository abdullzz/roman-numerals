function toRoman (numCheck)
{
  
    var dict = [ ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1] ]
    
    var result =''



    for (var x = 0; x < dict.length; x++)
      {
        // if (numCheck === dict[x][1])
        //   {
        //     result += dict[x][0]
        //     numCheck -= dict[x][1]
        //   }
        // else
        //   {
        //     var multiplier = Math.floor(numCheck / dict[x][1])
        //     result += dict[x][0].repeat(multiplier)

        //     numCheck = numCheck - (dict[x][1] * multiplier)
            
        //   }

        while (numCheck >= dict[x][1])
          {
            result += dict[x][0]
            numCheck -= dict[x][1]
          }
          
      }
    
    return result


}





console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('______|__________|_______')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))
console.log('tambahan self test')
console.log('2999  | MMCMXCIX | ', toRoman(2999))
console.log('1999  | MCMXCIX  | ', toRoman(1999))
console.log('1444  | MCCDXLIV | ', toRoman(1444))
console.log('444   | CDXLIV   | ', toRoman(444))
