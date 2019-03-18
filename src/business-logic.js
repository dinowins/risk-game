const usa = new squareRolls(usa, 50);
const eu = new squareRolls(eu, 50);
const southAm = new squareRolls(southAm, 50);
const africa = new squareRolls(africa, 50);

export let dice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

export class squareRolls {
  constructor(square, numbers) {
    this.square = square;
    this.numbers = numbers;
  }

  selectedSquare() {
    if ()
  }
}


// export let roll = (first, second) => {
//   let usaRoll = () => {
//     if (completeUsa >= 1) {
//       if (completeEurope <= 0) {
//         clearInterval(usaRoll);
//       }
//       $("#usa-tot").text(completeUsa);
//       let roll = dice();
//       completeUsa = completeUsa - roll;
//       console.log("USA roll " + roll);
//     } else {
//       clearInterval(usaRoll);
//       completeUsa = 0;
//       $("#usa-tot").text(completeUsa);
//     }
//   }
// }
