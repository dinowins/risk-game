import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { usaDice, euroDice, southDice, africaDice, usa, europe, southAm, africa, combat } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".usa").click(function() {
    let backgroundUsa = 60;
    let backgroundEurope = 60;
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
        if (isNaN(usa[0]) && isNaN(usa[1])) {
          void(0);
        } else if (isNaN(usa[1]) && !(isNaN(usa[0]))) {
          backgroundUsa = backgroundUsa - usa[0];
        } else {
          backgroundUsa = backgroundUsa - usa[0] - usa[1];
        }
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
        if (isNaN(europe[0]) && isNaN(europe[1])) {
          void(0);
        } else if (isNaN(europe[1]) && !(isNaN(europe[0]))) {
          backgroundEurope = backgroundEurope - europe[0];
        } else {
          backgroundEurope = backgroundEurope - europe[0] - europe[1];
        }
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
