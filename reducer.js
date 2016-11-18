const clone = require('clone')
const generateBoard = require('./generateBoard')
const addChars = require('./characters').addChars
const removeChars = require('./characters').removeChars
const outputChars = require('./characters').outputChars

module.exports = reducer

function reducer (state, action){
    var newState = clone(state)
    switch (action.type){
        case 'GENERATE_BOARD':
            newState.board = generateBoard(newState.charArray)
            return newState
        case 'ADD_CHARACTER':
            newState.charArray = addChars(action.payload)
            newState.board = generateBoard(newState.charArray)
            return newState
        case 'REMOVE_CHARACTER':
            newState.charArray = removeChars(action.payload)
            newState.board = generateBoard(newState.charArray)
            return newState
        default:
            return newState
    }
}
