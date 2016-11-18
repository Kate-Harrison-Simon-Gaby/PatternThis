
const h = require('hyperscript')

module.exports = template

function template(state, dispatch) {
  return h('div', {}, [
    displayBoard(state, dispatch),
    createForms(state, dispatch),
    //displayChars(state,dispatch)
  ])
}


function displayBoard(state, dispatch) {
  return h('div', state.board.map(function(firstArray) {
      return h('p', firstArray.join('')
    )})
  )
}

function createForms(state, dispatch) {
    return h('form', [
            h('input', {type: 'text', id: 'characterInput', placeholder: 'Enter a character'}),
            h('button', {type: 'submit', onclick: addCharacter}, 'Add Character'),
            h('button', {type: 'submit', onclick: removeCharacter}, 'Remove Character'),
            h('button', {type: 'submit', onclick: regerate}, 'Regenerate')
        ])


function addCharacter(e) {
    e.preventDefault()
    console.log(dispatch)
    var newCharacter = document.getElementById('characterInput').value
    newCharacter = newCharacter.toString()
    dispatch({type: 'ADD_CHARACTER', payload: newCharacter})
}

function removeCharacter(e) {
    e.preventDefault()
    var newCharacter = document.getElementById('characterInput').value
    newCharacter = newCharacter.toString()
    dispatch({type: 'REMOVE_CHARACTER', payload: newCharacter})
}
function regerate(e){
    e.preventDefault()
    dispatch({type: 'GENERATE_BOARD'})
}
}