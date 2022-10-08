
class Ship {
  constructor(length) {
    this.length = length;
  }
  numberHits() {

  }
  isSunk(){
    if (this.numberHits() == this.length) {
      return true
    } else return false
  }
}


class Gameboard {
    constructor(coordinates) {
      this.coordinates = coordinates;
    }
    placeShip(name, length, coord){ 
     name =  new Ship
     name.length = length

    }
    missedAttack(coord) {
      coord = missedArray.push
    }
    recieveAttack(coord){
      if (coord != ship.coord) {
        this.missedAttack(coord)
      } else if (coord == ship.coord) {
        Ship.numberHits()
      }
        
    }
    allSunk(){
      
    }
}

class Player {
  constructor(name) {
    this.name = name;
  }
  constructor(turn) {
    this.turn = turn;
  }
}




















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

