export let usa = [];
export let europe = [];
export let southAm = [];
export let africa = [];

export const usaDice = () => {
    usa = [];
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    usa.push(randomNumber);
}
export const euroDice = () => {
    europe = [];
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    europe.push(randomNumber);
}

export const combat = () => {
  usaDice();
  euroDice();
  console.log("USA roll: " + usa);
  console.log("Europe roll: " + europe);
  if (usa >= europe) {
    europe = [];
    europe.push(usa);
    usa = [];
  } else {
    usa = [];
    usa.push(europe);
    europe = [];
  }


}


















// export const southDice = () => {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     southAm.push(randomNumber);
// }
// export const africaDice = () => {
//     let randomNumber = Math.floor(Math.random() * 6) + 1;
//     africa.push(randomNumber);
// }


// export class Player {
//   constructor (continent, army) {
//     this.continent = continent;
//     this.army = army;
//   }
// }
