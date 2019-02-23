function sorting(arrNumber) {
    // code di sini
    for (var i = 0 ; i< arrNumber.length ; i++){
      temp = 0
      for(var j=0 ; j<arrNumber.length ; j++){
        if(arrNumber[i] > arrNumber[j]){
          temp = arrNumber[i]
          arrNumber[i] = arrNumber[j]
          arrNumber[j] = temp
        }
      }
    }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var counter = 0
        for(var i = 0 ; i < arrNumber.length ; i++){
            console.log(arrNumber[i])
            if(arrNumber[0] === arrNumber[i]){
            counter++
            console.log(counter)
            }
        }

    var result = 'Angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'

        if (arrNumber.length === 0) {
          return "''"
        } else{
          return result
        }
   }   
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''