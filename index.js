const redux = require('redux')
const h = require('hyperscript')
const morph = require('morphdom')
const reducer = require('./reducer')
const template = require('./views/template')
const generateBoard = require('./generateBoard')

const firstCharArray = ['0', '1']

const intialState = {
    charArray: firstCharArray,
    board: generateBoard(firstCharArray)
}

const store = redux.createStore(reducer, intialState)
const dispatch = store.dispatch

const updateView = () => {
    const initialState = store.getState()
    const newState = template(intialState, dispatch)
    morph(currentState, newState)
}

store.subscribe(updateView)

const currentState = template(intialState, dispatch)
console.log(currentState, 'Current State')
console.log(intialState, 'Initial state')
document.body.appendChild(currentState)