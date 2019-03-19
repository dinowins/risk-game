import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { usaDice, euroDice, southDice, africaDice, usa, europe, southAm, africa, combat } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".usa").click(function() {
    let backgroundUsa = 30;
    let backgroundEurope = 15;

    let usaRoll = setInterval(function() {
      if (backgroundUsa >= 1) {
        if (backgroundEurope <= 0) {
          clearInterval(usaRoll);
        }
        $("#usa-tot").text(backgroundUsa);
        usaDice();
        backgroundUsa = backgroundUsa - usa;
        console.log("USA roll: " + usa);
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
        }
        $("#euro-tot").text(backgroundEurope);
        euroDice();
        backgroundEurope = backgroundEurope - europe;
        console.log("Europe roll: " + europe);
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
