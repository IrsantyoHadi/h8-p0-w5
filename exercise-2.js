function changeVocals (str) {
  //code di sini
  var vocal = 'aiueo'
  var vocalBesar = vocal.toUpperCase()
  var kamus = 'bjvfp'
  var kamusBesar = kamus.toUpperCase()
  var newStr = str.split('')
  var flag = false
  var result = '' 
  for(var j = 0 ; j<newStr.length ; j++){
    flag = false
    for (var i = 0 ; i<vocal.length ; i++){
        if(newStr[j] === vocal[i] ){
          result += kamus[i]
          flag = true
        }
        else if (newStr[j] === vocalBesar[i]){
          result += kamusBesar[i]
          flag = true
        }
    }
      if(flag === false){
        result += newStr[j]
    }
  }
  return result
}

function reverseWord (str) {
  //code di sini
  var newStr = changeVocals(str)
  var result = ''
  for(var i = newStr.length -1 ; i>= 0 ; i--){
    // console.log(newStr[i])
    result += newStr[i]
  }
  return result
}

function setLowerUpperCase (str) {
  //code di sini
  var newStr = reverseWord(str)
  var result = ''
  for(var i = 0 ; i<newStr.length  ; i++){
    // console.log(newStr[i])
    if(newStr[i] === newStr[i].toUpperCase()){
      result += newStr[i].toLowerCase()
    }
    else if (newStr[i] === newStr[i].toLowerCase()){
      result += newStr[i].toUpperCase()
    }
  }
  return result
}

function removeSpaces (str) {
  //code di sini
  var newStr = setLowerUpperCase(str)
  var result = ''
  for(var i = 0 ; i<newStr.length ; i++){
    // console.log(newStr[i])
    if(newStr[i] != ' '){
      result += newStr[i]
    }
  }
  return result
}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5 ){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  else{
    return removeSpaces(name)
  }
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'