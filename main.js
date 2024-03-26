const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class hatGame {
    constructor(field){
        this.field = field;
        this.playerX = 0;
        this.playerY = 0;     
    }

    promptField(){
        let rows = prompt('How many rows the field will be? ')
        let rowsN = parseInt(rows)
        let col = prompt('How many cells the field will be? ')
        let colN = parseInt(col)

        this.newField(rowsN,colN)
    }

    newField(rowsN,colN){
        let myfield = []

        for (let i = 0 ; i < rowsN ; i++){
            let row = []
            for(let j = 0; j<=colN ; j++){
                row.push(fieldCharacter)
            }
            myfield.push(row)
        }

        this.addHat(myfield)

    }

    addHat(myfield){

        const rowsN = myfield.length
        const colN = myfield[0].length

        const x = Math.floor(Math.random()* rowsN)
        const y = Math.floor(Math.random()* colN)
        myfield[x][y] = hat;

        this.field = myfield
        this.addPathHoles()

    }

    addPathHoles(){
        const rowsN = this.field.length
        const colN = this.field[0].length

        let x, y;
        do {
            x = Math.floor(Math.random() * rowsN);
            y = Math.floor(Math.random() * colN);
        } while (this.field[x][y] !== fieldCharacter);

        this.field[x][y] = pathCharacter;

        // Add holes
        for (let i = 0; i < rowsN * colN * 0.3; i++) { //30% of the total cells will be holes
            let holeX, holeY;
            do {
                holeX = Math.floor(Math.random() * rowsN);
                holeY = Math.floor(Math.random() * colN);
            } while (this.field[holeX][holeY] !== fieldCharacter); // Ensure it's an empty cell
            this.field[holeX][holeY] = hole;
        }

        this.playerX = x; // Set player position
        this.playerY = y;
        this.printField();
        this.movePlayer();
    }
    
    movePlayer(){
        while(true){
            const direction = prompt('Tell me where to go( w = up, s = down, a = left, d = right): ')
            let newX = this.playerX;
            let newY = this.playerY;

            if (direction === 'w' && this.playerX > 0) {
                newX--;
            } else if (direction === 's' && this.playerX < this.field.length - 1) {
                newX++;
            } else if (direction === 'a' && this.playerY > 0) {
                newY--;
            } else if (direction === 'd' && this.playerY < this.field[0].length - 1) {
                newY++;
            } else {
                console.log('Invalid move!');
                continue;
            }

            if (this.field[newX][newY] === hat) {
                console.log('Congratulations! You found the hat!');
                break;
            } else if (this.field[newX][newY] === hole) {
                console.log('Oops! You fell into a hole. Game over!');
                break;
            } else {
                this.field[this.playerX][this.playerY] = fieldCharacter; // Reset previous position
                this.field[newX][newY] = pathCharacter; // Move player
                this.playerX = newX;
                this.playerY = newY;
                this.printField();
            }
        }
    }

    printField( ){
        for (let i = 0 ; i < this.field.length ; i++){
            console.log(this.field[i].join(' '))
        }
    }

    runGame(){
        this.promptField()
    }

}

let newGame = new hatGame()
newGame.runGame()