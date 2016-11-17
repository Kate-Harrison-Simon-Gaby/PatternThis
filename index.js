const redux = require('redux')
const h = require('hyperscript')
const morph = require('morphdom')
const reducer = require('./reducer')
const template = require('./template')
const generateBoard = require('./generateBoard')

document.main.appendChild(mainView)

const intialState = generateBoard()