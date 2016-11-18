const characters = require('./characters')

var size = 100

function generateBoard(charArray) {
  // generate base arr of length = size
  // convert to 2D arr ... arr.fill(newarray(size))
  var board = new Array(15)

  // fill with data;
  // var fullBoard = board.map(function(arr){
  //   var test = arr.map(function(index){
  //     console.log(element)
  //     var random = Number.toInteger(Math.random * charArray.length)
  //     console.log(random);
  //   })
  // })

  for (var i = 0; i < board.length; i++) {
    console.log(board.length);
    var newArray = []
    board[i].push(newArray)
    for (var j = 0; j < size; j++) {
      var random = parseInt(Math.random() * charArray.length)
       // console.log(random);
       board[i].push(charArray[random])
    }
  }

  return board
    //getChars
    //nested map on 2d arr
      //math.rand * getChars.length
      //assign selected char to index
  //return filled 2d arr
}

module.exports = generateBoard

console.log(generateBoard(['0','1','#']));
