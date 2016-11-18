const clone = require('clone')


var charArray = []

function addChars(currentArray, string){
  //take string
  //split into characters to be added (arr)
  var chars = string.split('')
  //clone charArray
  var arrCopy = clone(currentArray)
  //pass chars to be added into currentArray
  chars.forEach(function(char){
    //add char where no duplicates
    if (!arrCopy.includes(char)) arrCopy.push(char)
  })
  currentArray = arrCopy
  return currentArray
}

function removeChars(currentArray, string){
  //take string
  var chars = string.split('')
  //split into characters to be added (arr)
  //clone charArray
  var arrCopy = clone(currentArray)
  //pass chars to be removed from currentArray
     //remove char where there is match
  var arr = arrCopy.filter(function(char){
    if(!chars.includes(char)) return char
  })
  //return new currentArray
  currentArray = arr
  return currentArray
}

function outputChars(){
  return charArray
}

module.exports = {
  addChars,
  removeChars,
  outputChars
}
