const clone = require('clone')


var charArray = []

function addChars(string){
  //take string
  //split into characters to be added (arr)
  var chars = string.split('')
  //clone charArray
  var arrCopy = clone(charArray)
  //pass chars to be added into charArray
  chars.forEach(function(char){
    //add char where no duplicates
    if (!arrCopy.includes(char)) arrCopy.push(char)
  })
  charArray = arrCopy
  return charArray
}

function removeChars(string){
  //take string
  var chars = string.split('')
  console.log("bork", chars);
  //split into characters to be added (arr)
  //clone charArray
  var arrCopy = clone(charArray)
  //pass chars to be removed from charArray
     //remove char where there is match
  var arr = arrCopy.filter(function(char){
    if(!chars.includes(char)) return char
  })
  //return new charArray
  charArray = arr
  return charArray
}

function outputChars(){
  return charArray
}

module.exports = {
  addChars,
  removeChars,
  outputChars
}
console.log(addChars("abc"))
console.log(removeChars("bc"))
