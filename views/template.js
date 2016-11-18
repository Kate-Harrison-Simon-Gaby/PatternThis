
const h = require('hyperscript')

module.exports = template

function template(state, dispatch) {
  return h('div', {}, [
    displayTitle(),
    displayBoard(state, dispatch),
    //createForms(state, dispatch),
    //displayChars(state,dispatch)
  ])
}

function displayTitle() {
  return h('h1', "Pattern This")
}

function displayBoard(state,dispatch) {
  h('div', state.board.map(function(firstArray) {
      return h('div', firstArray.join('')
    )})
  )
}
