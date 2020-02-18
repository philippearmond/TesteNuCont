const inputOne = require('./data')
const inputTwo = require('./data')


const levelOne = require('./src/levelOne')
const levelTwo = require('./src/levelTwo')


console.log(
    levelOne.getData(inputOne.inputDataLevelOne),
    
    '<---------- SEPARAÇÃO DO CONTEUDO ---------->',
    levelTwo.getData(inputTwo.inputDataLevelTwo)
    )
  