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
            return
        case 'ADD_CHARACTER':
            return
        case 'REMOVE_CHARACTER':
            return
        case ''
    }
}
