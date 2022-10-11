console.log('hello')

class Ship {
  constructor(length, hits) {
    this.length = length;
    this.hits = hits
  }
  coord = [];
  isSunk(){
    console.log('sunk');
  }
  numberHits() {
    let totalPoints = this.length;
    this.hits++
    if (this.hits == totalPoints) {
      console.log('sunk')
      cruiser.isSunk();
    }
  }
 
}


class Gameboard {
    constructor(name, destroyer, cruiser, submarine, battleship, carrier) {
      this.name = name;
      this.destroyer = destroyer
      this.cruiser = cruiser
      this.submarine = submarine
      this.battleship = battleship
      this.carrier = carrier
    }

    get destroyer() {
      return this._destroyer;
    }
    

    set destroyer(ship) {
      this._destroyer = ship
    }


    createBoard(){
      let playerBoard = board;
      return playerBoard;
      } 
    placeShip(name, length, coord){ 
     name =  new Ship;
     name.length = length;
     name.hits = 0;
     name.coord = coord
     console.log(name)
    return name;
    }
    missedAttack(coord) {
     // coord = missedArray.push
    }

    recieveAttack(cruiser, coord){
      console.log(cruiser)
      console.log(coord)
      if (cruiser.coord.includes(coord)) {
        cruiser.numberHits()
      } else if (guessBoard.includes(coord)) {
        this.missedAttack(coord)
      } else console.log('error');
  }
    allSunk(){
      console.log('sunk')
    }
}

class Player {
  constructor(name) {
    this.name = name;
    this.cruiserArr = [];
  }
 playerBoard(boardName) {
  let newBoard = new Gameboard
  newBoard.name = boardName
  return newBoard;
 }
  createCruiser(coord) {


  }
}
const board = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10',
               'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10',
               'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10',
               'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10',
               'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10',
               'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
               'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10',
               'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10',
               'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10',
               'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10']
// console.log(board);

let shipArr = ['A1', 'A2', 'A3'];


  const player1 = new Player
  
  player1.name = 'plaeyr'
  player1.cruiserArr = ['A1','A2','A3']
  console.log(player1)
  let player1Board = player1.playerBoard('firstboard');
 // let subArr = ['B1','B2','B3']
 let guessBoard = player1Board.createBoard();
 //console.log(guessBoard)
  let cruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 // let sub = player1Board.placeShip('Sub', 3, subArr)
  console.log(cruiser)
 let guess = 'A1'
 let guess2 = 'A2'
 let guess3 = 'A3'
 player1Board.recieveAttack(cruiser, guess)
 player1Board.recieveAttack(cruiser, guess2)
 player1Board.recieveAttack(cruiser, guess3)
 
  












// console.log('hellow')
// function caesarCipher(string, num) {
//   let splitCode = [];
//   let combinedCode = []
//   let lowerString = string.toLowerCase();
//   for (let i = 0; i < lowerString.length; i++) {
//   let splitCode = lowerString.charCodeAt(i)
//   console.log(splitCode);
//   if (splitCode == 122) {
//     let addedCode = 96 + num;
//     let newLetter = String.fromCharCode(addedCode);
//     console.log(newLetter);
//     combinedCode[i] = newLetter
//   } else if ((splitCode < 123) && (splitCode > 96))  {
//   let addedCode = splitCode + num;
//   let newLetter = String.fromCharCode(addedCode);
//   combinedCode[i] = newLetter
//   }
  
//    console.log(combinedCode);
//   }
//   return combinedCode.join('');

// }
//  caesarCipher('Z./a', 1);
// module.exports = caesarCipher;

