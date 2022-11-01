 import './style.css';

class Ship {
  constructor(name, length, hits) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.sunk = false;
  }
  coord = [];
  isSunk(){
    let totalPoints = this.length;
    if (this.hits == totalPoints) {

      this.sunk = true;
      return true
    }
     return false
  }
  numberHits() {
    this.hits = this.hits + 1    
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
      return this.destroyer;}
    set setDestroyer(ship) {
      this.destroyer = ship}
    get getCruiser() {
      return this.cruiser;}
    set setCruiser(ship) {
      this.cruiser = ship} 
    get getSubmarine() {
      return this.submarine;}
    set setSubmarine(ship) {
      this.submarine = ship} 
    get getBattleship() {
      return this.battleship;}
    set setBattleship(ship) {
      this.battleship = ship}
    get getCarrier() {
      return this.carrier;}
    set setCarrier(ship) {
      this.carrier = ship}

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
      for (let i = 0; i < this.fleet.length; i++) {
        if (this.fleet[i].coord.includes(guess)) {
          this.fleet[i].numberHits()
          displayGuess(this, guess, 'hit')
          let sunk = this.fleet[i].isSunk()
          if (sunk == true) {
            displaySunk(this);
            let allSunk = this.allSunk()
            if (allSunk == true) {
              gameOver(this)
            }
          }
          return true
        }}
      for (let k = 0; k < this.guessBoard.length; k++) {
            if (this.guessBoard[k].includes(guess))  {
              this.missedAttack(guess)
              displayGuess(this, guess, 'miss')
              return false
            }}}

    allSunk(){
      let sunkArr = []
      for (let i = 0; i < this.fleet.length; i++) {
        let bool = this.fleet[i].sunk;
        sunkArr.push(bool);
      }
      for (let k = 0; k < sunkArr.length; k++) {
        if (sunkArr[k] == false) {
          return false
        }
      } return true
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
    this.computerGuessArr = []
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
  player1.cruiserArr = [];
  player1.destroyerArr = [];
  player1.carrierArr = [];
  player1.battleshipArr = [];
  player1.submarineArr = [];
  let player1Board = player1.createBoard('firstboard');
  player1.turn = true;
 player1Board.setCruiser = player1Board.placeShip('Cruiser', 3, player1.cruiserArr)
 player1Board.setDestroyer = player1Board.placeShip('Destroyer', 2, player1.destroyerArr)
 player1Board.setSubmarine = player1Board.placeShip('Submarine', 3, player1.submarineArr)
 player1Board.setBattleship = player1Board.placeShip('Battleship', 4, player1.battleshipArr)
 player1Board.setCarrier = player1Board.placeShip('Carrier', 5, player1.carrierArr)
 return player1
}

async function gameOver(player){
  setTimeout(() => {
    let header = document.querySelector('.header');
    let attackContainer = document.getElementById('attackContainer');
    attackContainer.setAttribute('class', 'gameOver')
    let gameoverText = document.createElement('div')
    gameoverText.setAttribute('class', 'gameText')
    header.appendChild(gameoverText);
    if (player.name == 'compBoard') {
      gameoverText.innerText = 'You Sunk Thier Battleship! You Win!'
    } else if (player.name == 'firstboard') {
      gameoverText.innerText = 'They Sunk Your Battleship! You Lose!'
    }}, "900")
  
}

function randomCoord(){
  let letter = ''
  let num= Math.floor(Math.random() * 10);
  let characters = 'ABCDEFGHIJ';
  let charactersLength = characters.length;
  letter += characters.charAt(Math.floor(Math.random() * charactersLength))
  let result = letter + num;
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
    return arr}
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
          return false
          }
      } else {
        return false
      }
    } else {
    return false
    }
  } else {
    return false
  }
}

function setComputerPlayer() {
  const compPlayer = new Player;
  compPlayer.name = 'compPlayer';
  setComputerShips(compPlayer);
  return compPlayer
}

function setComputerShips(compPlayer) {

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
}

function randomPlayerShips() {
  clearShips()
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

function clearComputerShips(){
  compPlayer.battleshipArr = []
  compPlayer.carrierArr = []
  compPlayer.cruiserArr = []
  compPlayer.submarineArr = []
  compPlayer.destroyerArr = []
  compPlayer.board.carrier.coord = []
  compPlayer.board.battleship.coord = []
  compPlayer.board.cruiser.coord = []
  compPlayer.board.submarine.coord = []
  compPlayer.board.destroyer.coord = []
  player.computerGuessArr = []
  let attackBoard = document.getElementById('attackBoard');
   let cellArr = attackBoard.querySelectorAll('.cell');
   for (let i=0; i < cellArr.length; i++) {
   cellArr[i].style.backgroundColor = "#93c5fd";
}}

function clearShips() {
   player.battleshipArr = []
   player.carrierArr = []
   player.cruiserArr = []
   player.submarineArr = []
   player.destroyerArr = []
   player.board.carrier.coord = []
   player.board.battleship.coord = []
   player.board.cruiser.coord = []
   player.board.submarine.coord = []
   player.board.destroyer.coord = []
   let defendBoard = document.getElementById('defendBoard');
   let cellArr = defendBoard.querySelectorAll('.cell');
   for (let i=0; i < cellArr.length; i++) {
   cellArr[i].style.backgroundColor = "#93c5fd";
}}

function displayGuess(board, guess, hit) {
  let boardType
  if (board.name == "compBoard") {
     boardType = 'at';
    let coord = document.getElementById(boardType+guess)
    if (hit == 'hit') {
    coord.style.backgroundColor = 'red';
    } else if (hit == 'miss'){
      coord.style.backgroundColor = 'white';
    }}
  else if (board.name == "firstboard") {
     boardType = 'de';
     let coord = document.getElementById(boardType+guess)
     if (hit == 'hit') {
      coord.style.backgroundColor = 'red';
      } else if (hit == 'miss'){
        coord.style.backgroundColor = 'white';
      }
}}
      
function computerGuess() {
  let guess = randomCoord()
  if (player.computerGuessArr.includes(guess)) {
    computerGuess()
    return
  }
  player.computerGuessArr.push(guess);
  let result = player.board.recieveAttack(guess)
}
   
function displaySunk(board) {
  let boardType
  if (board.name == "compBoard") {
     boardType = 'at';}
  else if (board.name == "firstboard") {
     boardType = 'de';}
    for (let i=0; i < board.fleet.length; i++) {
      if (board.fleet[i].sunk == true) {
        let arr = board.fleet[i].coord
        for (let k=0; k < arr.length; k++){
          let coord = document.getElementById(boardType+arr[k])
         // console.log(coord);
          coord.style.backgroundColor = '#1e293b';
        }
      }
    }
}

function setFleet() {
  let cruButton = document.getElementById('confirmCruiser');
  let desButton = document.getElementById('confirmDestroyer');
  let subButton = document.getElementById('confirmSubmarine');
  let batButton = document.getElementById('confirmBattleship');
  let carButton = document.getElementById('confirmCarrier');
  desButton.addEventListener("click", function(event) {
    let result = setShip(event, 'destroyer');
    if (result == null) {
      displayError('destroyer')
    } else {
    document.getElementById('destroyerError').style.visibility = 'hidden'
    player.board.destroyer.coord = result
    displayFleet(result)
    desButton.style.visibility = 'hidden'
  }}, false);
  cruButton.addEventListener("click", function(event) {
    let result = setShip(event, 'cruiser');
    if (result == null) {
      displayError('cruiser')
    } else {
    document.getElementById('cruiserError').style.visibility = 'hidden'
    player.board.cruiser.coord = result
    displayFleet(result)
    cruButton.style.visibility = 'hidden'
}}, false);
  subButton.addEventListener("click", function(event) {
    let result = setShip(event, 'submarine');
    if (result == null) {
      displayError('submarine')
    } else {
    document.getElementById('submarineError').style.visibility = 'hidden'
    player.board.submarine.coord = result
    displayFleet(result)
    subButton.style.visibility = 'hidden'
  }}, false);
  batButton.addEventListener("click", function(event) {
    let result = setShip(event, 'battleship');
    if (result == null) {
      displayError('battleship')
    } else {
    document.getElementById('battleshipError').style.visibility = 'hidden'
    player.board.battleship.coord = result
    displayFleet(result)
    batButton.style.visibility = 'hidden';
  }}, false);
  carButton.addEventListener("click", function(event) {
    let result = setShip(event, 'carrier');
    if (result == null) {
      displayError('carrier')
    } else {
    document.getElementById('carrierError').style.visibility = 'hidden'
    player.board.carrier.coord = result
    displayFleet(result)
    carButton.style.visibility = 'hidden'
  }}, false);
  let randomizeButton = document.getElementById('randomize');
  randomizeButton.addEventListener("click", randomPlayerShips);
  let startButton = document.getElementById('start')
  startButton.addEventListener("click", startGame);
}

 function startGame() {
  let attackContainer = document.getElementById('attackContainer')
  attackContainer.setAttribute('class', 'attackContainer')
  let gameoverText = document.querySelector('.gameText');
  if (gameoverText) {
    gameoverText.remove();
  }
  for (let i =0; i < player.board.fleet.length; i++) {
    if (player.board.fleet[i].coord == 0) {
      alert('Must place all ships to begin');
      return
    }
  }
  let startButton = document.getElementById('start')
  startButton.setAttribute('class', 'gameStart');
  startButton.innerText = 'Restart';
  startButton.addEventListener("click", stopGame);
  console.log(player.board.fleet)
  let attackBoard = document.getElementById('attackBoard');
  let cellArr = attackBoard.querySelectorAll('.cell');
  for (let i=0; i < cellArr.length; i++) {
    cellArr[i].addEventListener('click', cellClickHandler)
    }}

function cellClickHandler() {
  let cellID = this.id
  let guess = cellID.slice(2)
  let result = compPlayer.board.recieveAttack(guess)
  computerGuess()
}


function stopGame() {
  clearShips();
  clearComputerShips();
  setComputerShips(compPlayer);
  let startButton = document.getElementById('start');
  startButton.setAttribute('class', 'confirm');
  startButton.innerText = 'Start Game';
  startButton.removeEventListener('click', stopGame)
  let attackBoard = document.getElementById('attackBoard');
  let cellArr = attackBoard.querySelectorAll('.cell');
  for (let i=0; i < cellArr.length; i++) {
    cellArr[i].removeEventListener('click', cellClickHandler)}
  startButton.addEventListener("click", startGame);

}

function setShip(e, ship) {
  if (ship == 'cruiser') {
  let cruArr =[]
  let coor1Elm = document.getElementById('cruCoord1')
  let coor1 = coor1Elm.value.toUpperCase()
  let coor2Elm = document.getElementById('cruCoord2')
  let coor2 = coor2Elm.value.toUpperCase()
  let coor3Elm = document.getElementById('cruCoord3')
  let coor3 = coor3Elm.value.toUpperCase()
  cruArr.push(coor1, coor2, coor3)
  if (checkValues(cruArr)) {
  return cruArr
  } else {
    coor1Elm.value = '';
    coor2Elm.value = ''
    coor3Elm.value = ''
    return null
  }
  } else if (ship == 'destroyer') {
    let desArr =[]
    let coor1Elm = document.getElementById('desCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('desCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    desArr.push(coor1, coor2)
    if (checkValues(desArr)) {
      return desArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        return null
      }
  } else if (ship == 'submarine') {
    let subArr =[]
    let coor1Elm = document.getElementById('subCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('subCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    let coor3Elm = document.getElementById('subCoord3')
    let coor3 = coor3Elm.value.toUpperCase();
    subArr.push(coor1, coor2, coor3)
    if (checkValues(subArr)) {
      return subArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        coor3Elm.value = ''
        return null
      }
  } else if (ship == 'battleship') {
    let batArr =[]
    let coor1Elm = document.getElementById('batCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('batCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    let coor3Elm = document.getElementById('batCoord3')
    let coor3 = coor3Elm.value.toUpperCase();
    let coor4Elm = document.getElementById('batCoord4')
    let coor4 = coor4Elm.value.toUpperCase();
    batArr.push(coor1, coor2, coor3, coor4)
    if (checkValues(batArr)) {
      return batArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        coor3Elm.value = ''
        coor4Elm.value = ''
        return null
      }
  } else if (ship == 'carrier') {
    let carArr =[]
    let coor1Elm = document.getElementById('carCoord1')
    let coor1 = coor1Elm.value.toUpperCase();
    let coor2Elm = document.getElementById('carCoord2')
    let coor2 = coor2Elm.value.toUpperCase();
    let coor3Elm = document.getElementById('carCoord3')
    let coor3 = coor3Elm.value.toUpperCase();
    let coor4Elm = document.getElementById('carCoord4')
    let coor4 = coor4Elm.value.toUpperCase();
    let coor5Elm = document.getElementById('carCoord5')
    let coor5 = coor5Elm.value.toUpperCase();
    carArr.push(coor1, coor2, coor3, coor4, coor5)
    if (checkValues(carArr)) {
      return carArr
      } else {
        coor1Elm.value = '';
        coor2Elm.value = ''
        coor3Elm.value = ''
        coor4Elm.value = ''
        coor5Elm.value = ''
        return null
      }}}

function displayError(ship) {
    let shipEl = document.getElementById(`${ship}Error`)
    shipEl.style.visibility = 'visible'
    setFleet() 
}

function displayFleet(arr) {
  for (let i=0; i<arr.length; i++) {
    let coord = arr[i]
    let cell = document.getElementById(`de${coord}`);
    cell.style.backgroundColor = "#64748b";
  }
}

function checkValues(arr) {
  let reLetter = /[ABCDEFGHIJ]/
  let reNumber = /[0123456789]/
  for (let i=0; i < arr.length; i++) {
    let string = arr[i][0]
    let num  = arr[i][1]
    if ((reLetter.test(string) == false) || (reNumber.test(num) == false)) {
      return false
    }}
    return true
}

function generateDisplayBoard(attack, num) {
  const shipBoard = document.getElementById(`${attack}Board`);
  let arr = ['','A','B','C','D','E','F','G','H','I','J']
  for (let k=0; k<11; k++) { 
    let xAxisCell = document.createElement('div');
    xAxisCell.setAttribute('class', 'xindex');
    xAxisCell.innerText = arr[k]
    shipBoard.appendChild(xAxisCell);
  }
  for (let i=0; i<10; i++) {
    let indexCell = document.createElement('div');
    indexCell.setAttribute('class', 'index');
    indexCell.setAttribute('id', `index${i}`);
    indexCell.innerText = i;
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
    shipBoard.appendChild(indexCell);
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

let player = playerStartup();
let compPlayer = setComputerPlayer();
setFleet();
generateDisplayBoard('defend', 'de');
generateDisplayBoard('attack', 'at');
