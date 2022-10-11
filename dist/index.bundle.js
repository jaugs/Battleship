/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGluZ19wcmFjdGljZS8uL3NyYy9zdW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ2hlbGxvJylcclxuXHJcbmNsYXNzIFNoaXAge1xyXG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgaGl0cykge1xyXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMgPSBoaXRzXHJcbiAgfVxyXG4gIGNvb3JkID0gW107XHJcbiAgaXNTdW5rKCl7XHJcbiAgICBjb25zb2xlLmxvZygnc3VuaycpO1xyXG4gIH1cclxuICBudW1iZXJIaXRzKCkge1xyXG4gICAgbGV0IHRvdGFsUG9pbnRzID0gdGhpcy5sZW5ndGg7XHJcbiAgICB0aGlzLmhpdHMrK1xyXG4gICAgaWYgKHRoaXMuaGl0cyA9PSB0b3RhbFBvaW50cykge1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICAgIGNydWlzZXIuaXNTdW5rKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gXHJcbn1cclxuXHJcblxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzdHJveWVyLCBjcnVpc2VyLCBzdWJtYXJpbmUsIGJhdHRsZXNoaXAsIGNhcnJpZXIpIHtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5kZXN0cm95ZXIgPSBkZXN0cm95ZXJcclxuICAgICAgdGhpcy5jcnVpc2VyID0gY3J1aXNlclxyXG4gICAgICB0aGlzLnN1Ym1hcmluZSA9IHN1Ym1hcmluZVxyXG4gICAgICB0aGlzLmJhdHRsZXNoaXAgPSBiYXR0bGVzaGlwXHJcbiAgICAgIHRoaXMuY2FycmllciA9IGNhcnJpZXJcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzdHJveWVyKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVyO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgc2V0IGRlc3Ryb3llcihzaGlwKSB7XHJcbiAgICAgIHRoaXMuX2Rlc3Ryb3llciA9IHNoaXBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlQm9hcmQoKXtcclxuICAgICAgbGV0IHBsYXllckJvYXJkID0gYm9hcmQ7XHJcbiAgICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcclxuICAgICAgfSBcclxuICAgIHBsYWNlU2hpcChuYW1lLCBsZW5ndGgsIGNvb3JkKXsgXHJcbiAgICAgbmFtZSA9ICBuZXcgU2hpcDtcclxuICAgICBuYW1lLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICBuYW1lLmhpdHMgPSAwO1xyXG4gICAgIG5hbWUuY29vcmQgPSBjb29yZFxyXG4gICAgIGNvbnNvbGUubG9nKG5hbWUpXHJcbiAgICByZXR1cm4gbmFtZTtcclxuICAgIH1cclxuICAgIG1pc3NlZEF0dGFjayhjb29yZCkge1xyXG4gICAgIC8vIGNvb3JkID0gbWlzc2VkQXJyYXkucHVzaFxyXG4gICAgfVxyXG5cclxuICAgIHJlY2lldmVBdHRhY2soY3J1aXNlciwgY29vcmQpe1xyXG4gICAgICBjb25zb2xlLmxvZyhjcnVpc2VyKVxyXG4gICAgICBjb25zb2xlLmxvZyhjb29yZClcclxuICAgICAgaWYgKGNydWlzZXIuY29vcmQuaW5jbHVkZXMoY29vcmQpKSB7XHJcbiAgICAgICAgY3J1aXNlci5udW1iZXJIaXRzKClcclxuICAgICAgfSBlbHNlIGlmIChndWVzc0JvYXJkLmluY2x1ZGVzKGNvb3JkKSkge1xyXG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrKGNvb3JkKVxyXG4gICAgICB9IGVsc2UgY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgfVxyXG4gICAgYWxsU3Vuaygpe1xyXG4gICAgICBjb25zb2xlLmxvZygnc3VuaycpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuY3J1aXNlckFyciA9IFtdO1xyXG4gIH1cclxuIHBsYXllckJvYXJkKGJvYXJkTmFtZSkge1xyXG4gIGxldCBuZXdCb2FyZCA9IG5ldyBHYW1lYm9hcmRcclxuICBuZXdCb2FyZC5uYW1lID0gYm9hcmROYW1lXHJcbiAgcmV0dXJuIG5ld0JvYXJkO1xyXG4gfVxyXG4gIGNyZWF0ZUNydWlzZXIoY29vcmQpIHtcclxuXHJcblxyXG4gIH1cclxufVxyXG5jb25zdCBib2FyZCA9IFsnQTEnLCAnQTInLCAnQTMnLCAnQTQnLCAnQTUnLCAnQTYnLCAnQTcnLCAnQTgnLCAnQTknLCAnQTEwJyxcclxuICAgICAgICAgICAgICAgJ0IxJywgJ0IyJywgJ0IzJywgJ0I0JywgJ0I1JywgJ0I2JywgJ0I3JywgJ0I4JywgJ0I5JywgJ0IxMCcsXHJcbiAgICAgICAgICAgICAgICdDMScsICdDMicsICdDMycsICdDNCcsICdDNScsICdDNicsICdDNycsICdDOCcsICdDOScsICdDMTAnLFxyXG4gICAgICAgICAgICAgICAnRDEnLCAnRDInLCAnRDMnLCAnRDQnLCAnRDUnLCAnRDYnLCAnRDcnLCAnRDgnLCAnRDknLCAnRDEwJyxcclxuICAgICAgICAgICAgICAgJ0UxJywgJ0UyJywgJ0UzJywgJ0U0JywgJ0U1JywgJ0U2JywgJ0U3JywgJ0U4JywgJ0U5JywgJ0UxMCcsXHJcbiAgICAgICAgICAgICAgICdGMScsICdGMicsICdGMycsICdGNCcsICdGNScsICdGNicsICdGNycsICdGOCcsICdGOScsICdGMTAnLFxyXG4gICAgICAgICAgICAgICAnRzEnLCAnRzInLCAnRzMnLCAnRzQnLCAnRzUnLCAnRzYnLCAnRzcnLCAnRzgnLCAnRzknLCAnRzEwJyxcclxuICAgICAgICAgICAgICAgJ0gxJywgJ0gyJywgJ0gzJywgJ0g0JywgJ0g1JywgJ0g2JywgJ0g3JywgJ0g4JywgJ0g5JywgJ0gxMCcsXHJcbiAgICAgICAgICAgICAgICdJMScsICdJMicsICdJMycsICdJNCcsICdJNScsICdJNicsICdJNycsICdJOCcsICdJOScsICdJMTAnLFxyXG4gICAgICAgICAgICAgICAnSjEnLCAnSjInLCAnSjMnLCAnSjQnLCAnSjUnLCAnSjYnLCAnSjcnLCAnSjgnLCAnSjknLCAnSjEwJ11cclxuLy8gY29uc29sZS5sb2coYm9hcmQpO1xyXG5cclxubGV0IHNoaXBBcnIgPSBbJ0ExJywgJ0EyJywgJ0EzJ107XHJcblxyXG5cclxuICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllclxyXG4gIFxyXG4gIHBsYXllcjEubmFtZSA9ICdwbGFleXInXHJcbiAgcGxheWVyMS5jcnVpc2VyQXJyID0gWydBMScsJ0EyJywnQTMnXVxyXG4gIGNvbnNvbGUubG9nKHBsYXllcjEpXHJcbiAgbGV0IHBsYXllcjFCb2FyZCA9IHBsYXllcjEucGxheWVyQm9hcmQoJ2ZpcnN0Ym9hcmQnKTtcclxuIC8vIGxldCBzdWJBcnIgPSBbJ0IxJywnQjInLCdCMyddXHJcbiBsZXQgZ3Vlc3NCb2FyZCA9IHBsYXllcjFCb2FyZC5jcmVhdGVCb2FyZCgpO1xyXG4gLy9jb25zb2xlLmxvZyhndWVzc0JvYXJkKVxyXG4gIGxldCBjcnVpc2VyID0gcGxheWVyMUJvYXJkLnBsYWNlU2hpcCgnQ3J1aXNlcicsIDMsIHBsYXllcjEuY3J1aXNlckFycilcclxuIC8vIGxldCBzdWIgPSBwbGF5ZXIxQm9hcmQucGxhY2VTaGlwKCdTdWInLCAzLCBzdWJBcnIpXHJcbiAgY29uc29sZS5sb2coY3J1aXNlcilcclxuIGxldCBndWVzcyA9ICdBMSdcclxuIGxldCBndWVzczIgPSAnQTInXHJcbiBsZXQgZ3Vlc3MzID0gJ0EzJ1xyXG4gcGxheWVyMUJvYXJkLnJlY2lldmVBdHRhY2soY3J1aXNlciwgZ3Vlc3MpXHJcbiBwbGF5ZXIxQm9hcmQucmVjaWV2ZUF0dGFjayhjcnVpc2VyLCBndWVzczIpXHJcbiBwbGF5ZXIxQm9hcmQucmVjaWV2ZUF0dGFjayhjcnVpc2VyLCBndWVzczMpXHJcbiBcclxuICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc29sZS5sb2coJ2hlbGxvdycpXHJcbi8vIGZ1bmN0aW9uIGNhZXNhckNpcGhlcihzdHJpbmcsIG51bSkge1xyXG4vLyAgIGxldCBzcGxpdENvZGUgPSBbXTtcclxuLy8gICBsZXQgY29tYmluZWRDb2RlID0gW11cclxuLy8gICBsZXQgbG93ZXJTdHJpbmcgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcclxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGxvd2VyU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgbGV0IHNwbGl0Q29kZSA9IGxvd2VyU3RyaW5nLmNoYXJDb2RlQXQoaSlcclxuLy8gICBjb25zb2xlLmxvZyhzcGxpdENvZGUpO1xyXG4vLyAgIGlmIChzcGxpdENvZGUgPT0gMTIyKSB7XHJcbi8vICAgICBsZXQgYWRkZWRDb2RlID0gOTYgKyBudW07XHJcbi8vICAgICBsZXQgbmV3TGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShhZGRlZENvZGUpO1xyXG4vLyAgICAgY29uc29sZS5sb2cobmV3TGV0dGVyKTtcclxuLy8gICAgIGNvbWJpbmVkQ29kZVtpXSA9IG5ld0xldHRlclxyXG4vLyAgIH0gZWxzZSBpZiAoKHNwbGl0Q29kZSA8IDEyMykgJiYgKHNwbGl0Q29kZSA+IDk2KSkgIHtcclxuLy8gICBsZXQgYWRkZWRDb2RlID0gc3BsaXRDb2RlICsgbnVtO1xyXG4vLyAgIGxldCBuZXdMZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFkZGVkQ29kZSk7XHJcbi8vICAgY29tYmluZWRDb2RlW2ldID0gbmV3TGV0dGVyXHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgICBjb25zb2xlLmxvZyhjb21iaW5lZENvZGUpO1xyXG4vLyAgIH1cclxuLy8gICByZXR1cm4gY29tYmluZWRDb2RlLmpvaW4oJycpO1xyXG5cclxuLy8gfVxyXG4vLyAgY2Flc2FyQ2lwaGVyKCdaLi9hJywgMSk7XHJcbi8vIG1vZHVsZS5leHBvcnRzID0gY2Flc2FyQ2lwaGVyO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9