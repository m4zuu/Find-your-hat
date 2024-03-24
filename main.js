const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class hatGame {
    constructor(field){
        this.field = field
        
    }

    newField(){
        let field = [ ]
        let rows = prompt('How many rows the field will be? ')
        let col = prompt('How many cells the field will be? ')

        for (let i = 0 ; i <= rows ; i++){
            field.push(fieldCharacter)
            for(let j = 0; j<=col; j++){
                field.push(fieldCharacter)
            }
            return field
        }
    }
}

let newGame = new hatGame()
newGame.newField()