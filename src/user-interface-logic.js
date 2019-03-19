import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { usaDice, euroDice, southDice, africaDice, usa, europe, southAm, africa, combat } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".usa").click(function() {
    let backgroundUsa = 30;
    let backgroundEurope = 30;
    let combatRoll = setInterval(function() {
      combat();
    }, 1000);

    let usaRoll = setInterval(function() {
      if (backgroundUsa >= 1) {
        if (backgroundEurope <= 0) {
          clearInterval(usaRoll);
          clearInterval(combatRoll);
        }
        $("#usa-tot").text(backgroundUsa);
        backgroundUsa = backgroundUsa - usa;
        console.log("USA: " + backgroundUsa);
      } else {
        clearInterval(usaRoll);
        backgroundUsa = 0;
        $("#usa-tot").text(backgroundUsa);
      }
    }, 1000);

    let europeRoll = setInterval(function() {
      if (backgroundEurope >= 1) {
        if (backgroundUsa <= 0) {
          clearInterval(europeRoll);
          clearInterval(combatRoll);
        }
        $("#euro-tot").text(backgroundEurope);
        backgroundEurope = backgroundEurope - europe;
        console.log("Europe: " + backgroundEurope);
      } else {
        clearInterval(europeRoll);
        backgroundEurope = 0;
        $("#euro-tot").text(backgroundEurope);
      }
    }, 1000);
  })
})

// $(document).ready(function() {
//   $(".usa").click(function(event) {
//     let completeUsa = 30;
//     let completeEurope = 15;
//
//     let europeRoll = setInterval(function() {
//       if (completeEurope >= 1) {
//         if (completeUsa <= 0) {
//           clearInterval(europeRoll);
//         }
//         $("#euro-tot").text(completeEurope);
//         let roll = dice();
//         completeEurope = completeEurope - roll;
//         console.log("Europe roll: " + roll);
//       } else {
//         clearInterval(europeRoll);
//         completeEurope = 0;
//         $("#euro-tot").text(completeEurope);
//       }
//     }, 1000);
//
//     let usaRoll = setInterval(function() {
//       if (completeUsa >= 1) {
//         if (completeEurope <= 0) {
//           clearInterval(usaRoll);
//         }
//         $("#usa-tot").text(completeUsa);
//         let roll = dice();
//         completeUsa = completeUsa - roll;
//         console.log("USA roll " + roll);
//       } else {
//         clearInterval(usaRoll);
//         completeUsa = 0;
//         $("#usa-tot").text(completeUsa);
//       }
//     }, 1000);
//
//   })
// });
