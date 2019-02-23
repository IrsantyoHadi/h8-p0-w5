function totalDigitRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka)
    var dataAwal = strAngka[0]
    // console.log(dataAwal)
    var dataSisa = strAngka.slice(1)
      // console.log(dataSisa)
    if( dataAwal ===  undefined){
      return 0
    }else{
      return Number(dataAwal) + totalDigitRekursif(dataSisa)
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5