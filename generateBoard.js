const characters = require('./characters')

var size = 20

function generateBoard(charArray) {
  // generate base arr of length = size
  // convert to 2D arr ... arr.fill(newarray(size))
  var board = new Array(size)
  board.fill(new Array(size))

  // fill with data;
  // var fullBoard = board.map(function(arr){
  //   var test = arr.map(function(index){
  //     console.log(element)
  //     var random = Number.toInteger(Math.random * charArray.length)
  //     console.log(random);
  //   })
  // })

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var random = parseInt(Math.random() * charArray.length)
       // console.log(random);
       board[i][j] = charArray[random]
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

// console.log(generateBoard(['0','1','#']));
