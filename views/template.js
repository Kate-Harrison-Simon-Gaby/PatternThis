
const h = require('hyperscript')

module.exports = template

function template(state, dispatch) {
  return h('div', {}, [
    displayChars(state,dispatch),
    displayBoard(state, dispatch)
    //createForms(state, dispatch),

  ])
}


function displayBoard(state, dispatch) {
  return h('p', state.board.map(function(firstArray) {
      return h('p', firstArray.join('')
    )})
  )
}

function displayChars(state, dispatch) {
  return h('h2', "Characters: ", state.charArray.join())
}
