function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka)
    var dataAwal = strAngka[0]
    var dataSisa = strAngka.slice(1)
    // console.log(dataAwal)
    if(strAngka.length === 1){
      return Number(dataAwal)
    }else{
      return kaliTerusRekursif(dataAwal * kaliTerusRekursif(Number(dataSisa)))
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6