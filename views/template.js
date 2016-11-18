
const h = require('hyperscript')

module.exports = template

function template(state, dispatch) {
  return h('div', {}, [
    displayTitle(),
    displayBoard(state, dispatch),
    createForms(state, dispatch),
    displayChars(state,dispatch)
  ])
}

function displayTitle() {
  
}
