const redux = require('redux')
const h = require('hyperscript')
const morph = require('morphdom')
const reducer = require('./reducer')
const template = require('./template')
const generateBoard = require('./generateBoard')

document.main.appendChild(currentState)

const firstCharArray = ['0', '1']

const intialState = {
    charArray: firstCharArray
    board: generateBoard(firstCharArray)
}

const store = redux.createStore(reducer, intialState)
const dispatch = store.dispatch

const currentState = template(intialState.board, dispatch)

const updateView = () => {
    const initialState = store.getState()
    const newState = template(intialState.board, dispatch)
    morph(currentState, newState)
}

store.subscribe(updateView)