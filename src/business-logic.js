export let usa = [];
export let europe = [];
export let southAm = [];
export let africa = [];

export const usaDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    usa.push(randomNumber);
}
export const euroDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    europe.push(randomNumber);
}

export const combat = () => {
  usa = [];
  europe = [];
  usaDice();
  usaDice();
  euroDice();
  euroDice();
  usa.sort(function(a,b){return b-a});
  europe.sort(function(a,b){return b-a});
  let comparisons = () => {
    if (usa[0] >= europe[0]) {
      europe.push(usa[0]);
    } else {
      usa.push(europe[0]);
    }
    if (usa[1] >= europe[1]) {
      europe.push(usa[1]);
    } else {
      usa.push(europe[1]);
    }
    console.log("USA Before shift: " + usa);
    console.log("Euro Before shift: " + europe);
    usa.shift();
    usa.shift();
    europe.shift();
    europe.shift();
    console.log("USA After shift: " + usa);
    console.log("Euro After shift: " + europe);
  }
  comparisons();
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
