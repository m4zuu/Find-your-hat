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
        let myfield = []
        let rows = prompt('How many rows the field will be? ')
        let rowsN = parseInt(rows)
        let col = prompt('How many cells the field will be? ')
        let colN = parseInt(col)

        for (let i = 0 ; i < rowsN ; i++){
            let row = []
            for(let j = 0; j<=colN ; j++){
                row.push(fieldCharacter)
            }
            myfield.push(row)
        }
        this.field = myfield
        this.printField()
    }

    printField( ){
        for (let i = 0 ; i < this.field.length ; i++){
            console.log(this.field[i].join(' '))
        }
    }
}

let newGame = new hatGame()
newGame.newField()