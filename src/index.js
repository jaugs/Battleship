console.log('dfdf')
 import './style.css';
// let constantee = document.querySelector('.container')
class Ship {
  constructor(name, length, hits) {
    this.name = name;
    this.length = length;
    this.hits = hits
  }
  coord = [];
  isSunk(){
    let sunk = false;
    let totalPoints = this.length;
    if (this.hits == totalPoints) {
      console.log('sunk')
      sunk = true;
    }
    return sunk
  }
  numberHits() {
    //console.log(this)
    this.hits = this.hits + 1
    //console.log(this.hits);
    let result = this.isSunk()
    //console.log(result)
    
  }
 
}


class Gameboard {
    constructor(name) {
      this.name = name;
      this.fleet = []
      this.guessBoard = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A0',
                         'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B0',
                         'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C0',
                         'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D0',
                         'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E0',
                         'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F0',
                         'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G0',
                         'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H0',
                         'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I0',
                         'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J0'];
    }

    get getDestroyer() {
      return this.destroyer;
    }
    set setDestroyer(ship) {
      this.destroyer = ship
    }
    get getCruiser() {
      return this.cruiser;
    }
    set setCruiser(ship) {
      this.cruiser = ship
    } 
    get getSubmarine() {
      return this.submarine;
    }
    set setSubmarine(ship) {
      this.submarine = ship
    } 
    get getBattleship() {
      return this.battleship;
    }
    set setBattleship(ship) {
      this.battleship = ship
    }
    get getCarrier() {
      return this.carrier;
    }
    set setCarrier(ship) {
      this.carrier = ship
    }

    placeShip(name, length, coord){ 
     let ship =  new Ship;
     ship.name = name
     ship.length = length;
     ship.hits = 0;
     ship.coord = coord
     this.fleet.push(ship)
    return ship;
    }
    missedAttack(coord) {
        let guessCoord = this.guessBoard.indexOf(coord);
        if (~guessCoord) {
          this.guessBoard[guessCoord] = 'miss'
        }
       
  
    }

    recieveAttack(guess){
      //console.log(this)
      for (let i = 0; i < this.fleet.length; i++) {
        if (this.fleet[i].coord.includes(guess)) {
          let result = true
          console.log(result)
          this.fleet[i].numberHits()
          return result
        }}
      for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess))  {
              this.missedAttack(guess)
              return false
            }
          
     
    }}

    allSunk(){
      console.log('sunk')
    }
}

class Player {
  constructor(name, board) {
    this.name = name;
    this.board = board;
    this.turn = true;
    this.cruiserArr = [];
    this.destroyerArr = [];
    this.submarineArr = [];
    this.battleshipArr = [];
    this.carrierArr = [];
  }
 createBoard(boardName) {
  let newBoard = new Gameboard
  newBoard.name = boardName
  this.board = newBoard;
  return newBoard;
 }
}

function playerStartup(){
  const player1 = new Player
  player1.name = 'player'
  player1.cruiserArr = ['A1','A2','A3']
  player1.destroyerArr = ['B1','B2']
  player1.carrierArr = ['C1','C2','C3','C4','C5']
  player1.battleshipArr = ['D1','D2','D3','D4']
  player1.submarineArr = ['E1','E2','E3']
  let player1Board = player1.createBoard('firstboard');
  player1.turn = true;
  //setFleet(player1);
 // console.log(player1.cruiserArr);
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 2, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 4, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 5, player1.carrierArr)
 return player1
}


function randomCoord(){
  let letter = ''
  let num= Math.floor(Math.random() * 10);
  let characters = 'ABCDEFGHIJ';
  let charactersLength = characters.length;
  letter += characters.charAt(Math.floor(Math.random() * charactersLength))
  let result = letter + num;
 // console.log(result[0])
  return result
}

function randomPlaceShip(size){
  let firstCoor = randomCoord()
  let characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' , 'J'];
  let bool = Math.random() < 0.5;
  if (bool) {
    let arr = []
    let letter = firstCoor[0];
    let number = firstCoor[1];
    let index = characters.indexOf(letter)
    if (index > (characters.length-size)) {
      index = characters.length-size;
    }
    let firstLetter = characters[index]
    let secondLetter = characters[index+1]
    let thirdLetter = characters[index+2]
    let forthLetter = characters[index+3]
    let fifthLetter = characters[index+4]
    if (size == 2) {
      arr.push((firstLetter+number), (secondLetter+number));
    } else if (size == 3) {
      arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number));
    } else if (size == 4) {
      arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number), (forthLetter+number));
    } else if (size == 5) {
    arr.push((firstLetter+number), (secondLetter+number), (thirdLetter+number), (forthLetter+number), (fifthLetter+number));
    }
    //console.log(arr);
    return arr
  } else {
    let arr = []
    let letter = firstCoor[0];
    let number = Number(firstCoor[1]);
    if (number > (10-size)) {
      number = 10-size
    }
    let firstNumber = number
    let secondNumber = number + 1
    let thirdNumber = number + 2
    let forthNumber = number + 3
    let fifthNumber = number + 4
    if (size == 2) {
      arr.push((letter+firstNumber), (letter+secondNumber));
    } else if (size == 3) {
      arr.push((letter+firstNumber), (letter+secondNumber), (letter+thirdNumber));
    } else if (size == 4) {
      arr.push((letter+firstNumber), (letter+secondNumber), (letter+thirdNumber), (letter+forthNumber));
    } else if (size == 5) {
      arr.push((letter+firstNumber), (letter+secondNumber), (letter+thirdNumber), (letter+forthNumber), (letter+fifthNumber));    
    }
   // console.log(arr);
    return arr
  }
}

function checkShip(shipArr1, shipArr2, shipArr3, shipArr4, shipArr5){
  let check1 = shipArr1.filter(element => (shipArr2.includes(element) || shipArr3.includes(element) || shipArr4.includes(element) || shipArr5.includes(element)));
  if (check1.length == 0) {
    let check2 = shipArr2.filter(element => (shipArr3.includes(element) || shipArr4.includes(element) || shipArr5.includes(element)));
    if (check2.length == 0) {
      let check3 = shipArr3.filter(element => (shipArr4.includes(element) || shipArr5.includes(element)));
      if (check3.length == 0) {
        let check4 = shipArr4.filter(element => (shipArr5.includes(element)));
        if (check4.length == 0) {
          return true
        } else { 
          console.log('false4')
          return false
          }
      } else {
        console.log('false3')
        return false
      }
    } else {
      console.log('false2')
    return false
    }
  } else {
    console.log('false')
    return false
  }
  
}

function setComputerPlayer() {
  const compPlayer = new Player;
  compPlayer.name = 'compPlayer';

  function randomize(){
  compPlayer.carrierArr = randomPlaceShip(5);
  compPlayer.battleshipArr = randomPlaceShip(4);
  compPlayer.cruiserArr = randomPlaceShip(3);
  compPlayer.submarineArr = randomPlaceShip(3);
  compPlayer.destroyerArr = randomPlaceShip(2)
  let check = checkShip(compPlayer.carrierArr, compPlayer.battleshipArr, compPlayer.cruiserArr, compPlayer.submarineArr, compPlayer.destroyerArr);
  if (check == false) {
    randomize()
  } else return
  }
  randomize()
  let compBoard = compPlayer.createBoard('compBoard');
  compPlayer.turn = false;
 compBoard.setCruiser = compBoard.placeShip('Cruiser', 3, compPlayer.cruiserArr)
 compBoard.setDestroyer = compBoard.placeShip('Destroyer', 2, compPlayer.destroyerArr)
 compBoard.setSubmarine = compBoard.placeShip('Submarine', 3, compPlayer.submarineArr)
 compBoard.setBattleship = compBoard.placeShip('Battleship', 4, compPlayer.battleshipArr)
 compBoard.setCarrier = compBoard.placeShip('Carrier', 5, compPlayer.carrierArr)
 console.log(compBoard)
 return compPlayer
}


let player = playerStartup();
let compPlayer = setComputerPlayer();
//console.log(compPlayer)
//console.log(randomPlaceShip(5));
setFleet();
//console.log(player)

function randomPlayerShips() {
  function randomize(){
    player.board.carrier.coord = randomPlaceShip(5);
    player.board.battleship.coord = randomPlaceShip(4);
    player.board.cruiser.coord = randomPlaceShip(3);
    player.board.submarine.coord = randomPlaceShip(3);
    player.board.destroyer.coord = randomPlaceShip(2)
    let check = checkShip(player.board.carrier.coord, player.board.battleship.coord, player.board.cruiser.coord, player.board.submarine.coord, player.board.destroyer.coord);
    if (check == false) {
      randomize()
    } else return
    }
    randomize()
    displayFleet(player.board.carrier.coord);
    displayFleet(player.board.battleship.coord);
    displayFleet(player.board.cruiser.coord);
    displayFleet(player.board.submarine.coord);
    displayFleet(player.board.destroyer.coord);


}

function setFleet() {
  let cruiser = document.getElementById('cruiser')
  let cruButton = document.getElementById('confirmCruiser');
  let destroyer = document.getElementById('destroyer')
  let desButton = document.getElementById('confirmDestroyer');
  let submarine = document.getElementById('submarine')
  let subButton = document.getElementById('confirmSubmarine');
  let battleship = document.getElementById('battleship')
  let batButton = document.getElementById('confirmBattleship');
  let carrier = document.getElementById('carrier')
  let carButton = document.getElementById('confirmCarrier');
  desButton.addEventListener("click", function(event) {
    let result = setShip(event, 'destroyer');
    player.board.destroyer.coord = result
    displayFleet(result)
    destroyer.removeChild(desButton);
  }, false);
  cruButton.addEventListener("click", function(event) {
    let result = setShip(event, 'cruiser');
    player.board.cruiser.coord = result
    displayFleet(result)
    console.log(player.board)
    cruiser.removeChild(cruButton);
  }, false);
  subButton.addEventListener("click", function(event) {
    let result = setShip(event, 'submarine');
    player.board.submarine.coord = result
    displayFleet(result)
    submarine.removeChild(subButton);
  }, false);
  batButton.addEventListener("click", function(event) {
    let result = setShip(event, 'battleship');
    player.board.battleship.coord = result
    displayFleet(result)
    battleship.removeChild(batButton);
  }, false);
  carButton.addEventListener("click", function(event) {
    let result = setShip(event, 'carrier');
    player.board.carrier.coord = result
    displayFleet(result)
    carrier.removeChild(carButton);
  }, false);
  let randomizeButton = document.getElementById('randomize');
  randomizeButton.addEventListener("click", randomPlayerShips);
  let startButton = document.getElementById('start')
  startButton.addEventListener("click", startGame);



}

 function startGame() {
  
  if (player.turn == true) {
    let guessButton = document.getElementById('confirmGuess')
    guessButton.addEventListener("click",  function(event) {
      let result =  playerGuess();
      let result2 = computerGuess();
    })

}
 }
function playerGuess() {
  let guess = document.getElementById('guessCoord').value;
  console.log(guess);
  let result = compPlayer.board.recieveAttack(guess)
  if (result == true) {
      let cell = document.getElementById(`at${guess}`);
      cell.style.backgroundColor = "red";
      return true
  } else if (result == false) {
    let cell = document.getElementById(`at${guess}`);
      cell.style.backgroundColor = "blue";
      return false
  }
}

function computerGuess() {
  let guess = randomCoord()
  console.log(guess);
  let result = player.board.recieveAttack(guess)
  if (result == true) {
    let cell = document.getElementById(`de${guess}`);
    cell.style.backgroundColor = "black";
    return true
} else if (result == false) {
  let cell = document.getElementById(`de${guess}`);
    cell.style.backgroundColor = "blue";
    return false
}
}

function setShip(e, ship) {
  if (ship == 'cruiser') {
  let cruArr =[]
  let coor1 = document.getElementById('cruCoord1').value;
  let coor2 = document.getElementById('cruCoord2').value;
  let coor3 = document.getElementById('cruCoord3').value;
  cruArr.push(coor1, coor2, coor3)
  checkValues(cruArr);
  return cruArr
  } else if (ship == 'destroyer') {
    let desArr =[]
    let coor1 = document.getElementById('desCoord1').value;
    let coor2 = document.getElementById('desCoord2').value;
    desArr.push(coor1, coor2)
    checkValues(desArr);
    return desArr
  } else if (ship == 'submarine') {
    let subArr =[]
    let coor1 = document.getElementById('subCoord1').value;
    let coor2 = document.getElementById('subCoord2').value;
    let coor3 = document.getElementById('subCoord3').value;
    subArr.push(coor1, coor2, coor3)
    checkValues(subArr);
    return subArr
  } else if (ship == 'battleship') {
    let batArr =[]
    let coor1 = document.getElementById('batCoord1').value;
    let coor2 = document.getElementById('batCoord2').value;
    let coor3 = document.getElementById('batCoord3').value;
    let coor4 = document.getElementById('batCoord4').value;
    batArr.push(coor1, coor2, coor3, coor4)
    checkValues(batArr);
    return batArr
  } else if (ship == 'carrier') {
    let carArr =[]
    let coor1 = document.getElementById('carCoord1').value;
    let coor2 = document.getElementById('carCoord2').value;
    let coor3 = document.getElementById('carCoord3').value;
    let coor4 = document.getElementById('carCoord4').value;
    let coor5 = document.getElementById('carCoord5').value;
    carArr.push(coor1, coor2, coor3, coor4, coor5)
    checkValues(carArr);
    return carArr
  }
}


function displayFleet(arr) {
  let defendBoard = document.getElementById('defendBoard');
  for (let i=0; i<arr.length; i++) {
    let coord = arr[i]
   // console.log(coord);
    let cell = document.getElementById(`de${coord}`);
    //console.log(cell)
    cell.style.backgroundColor = "red";
  }

}

function checkValues(arr) {
  
}


function fakeGame(guess, board){
  let guess2 = 'A2'
  let guess3 = 'A3'
  let result = board.recieveAttack(guess)
  return result
 }
 

function generateDisplayBoard(attack, num) {
  const shipBoard = document.getElementById(`${attack}Board`);
  //console.log(container);
  for (let i=0; i<10; i++) {
    let cellA = document.createElement('div');
    cellA.setAttribute('class', 'cell');
    cellA.setAttribute('id', `${num}A${i}`);
    let cellB = document.createElement('div');
    cellB.setAttribute('class', 'cell');
    cellB.setAttribute('id', `${num}B${i}`);
    let cellC = document.createElement('div');
    cellC.setAttribute('class', 'cell');
    cellC.setAttribute('id', `${num}C${i}`);
    let cellD = document.createElement('div');
    cellD.setAttribute('class', 'cell');
    cellD.setAttribute('id', `${num}D${i}`);
    let cellE = document.createElement('div');
    cellE.setAttribute('class', 'cell');
    cellE.setAttribute('id', `${num}E${i}`);
    let cellF = document.createElement('div');
    cellF.setAttribute('class', 'cell');
    cellF.setAttribute('id', `${num}F${i}`);
    let cellG = document.createElement('div');
    cellG.setAttribute('class', 'cell');
    cellG.setAttribute('id', `${num}G${i}`);
    let cellH = document.createElement('div');
    cellH.setAttribute('class', 'cell');
    cellH.setAttribute('id', `${num}H${i}`);
    let cellI = document.createElement('div');
    cellI.setAttribute('class', 'cell');
    cellI.setAttribute('id', `${num}I${i}`);
    let cellJ = document.createElement('div');
    cellJ.setAttribute('class', 'cell');
    cellJ.setAttribute('id', `${num}J${i}`);
    shipBoard.appendChild(cellA);
    shipBoard.appendChild(cellB);
    shipBoard.appendChild(cellC);
    shipBoard.appendChild(cellD);
    shipBoard.appendChild(cellE);
    shipBoard.appendChild(cellF);
    shipBoard.appendChild(cellG);
    shipBoard.appendChild(cellH);
    shipBoard.appendChild(cellI);
    shipBoard.appendChild(cellJ);
  }
}

generateDisplayBoard('defend', 'de');
generateDisplayBoard('attack', 'at');





