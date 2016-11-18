
const h = require('hyperscript')

module.exports = template

function template(state, dispatch) {
  return h('div', {}, [
    displayBoard(state, dispatch),
    //createForms(state, dispatch),
    //displayChars(state,dispatch)
  ])
}


function displayBoard(state, dispatch) {
  return h('div', state.board.map(function(firstArray) {
      return h('p', firstArray.join('')
    )})
  )
}
