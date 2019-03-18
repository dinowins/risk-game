import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { dice } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".usa").click(function(event) {
    let completeUsa = 30;
    let completeEurope = 15;

    let europeRoll = setInterval(function() {
      if (completeEurope >= 1) {
        if (completeUsa <= 0) {
          clearInterval(europeRoll);
        }
        $("#euro-tot").text(completeEurope);
        let roll = dice();
        completeEurope = completeEurope - roll;
        console.log("Europe roll: " + roll);
      } else {
        clearInterval(europeRoll);
        completeEurope = 0;
        $("#euro-tot").text(completeEurope);
      }
    }, 1000);

    let usaRoll = setInterval(function() {
      if (completeUsa >= 1) {
        if (completeEurope <= 0) {
          clearInterval(usaRoll);
        }
        $("#usa-tot").text(completeUsa);
        let roll = dice();
        completeUsa = completeUsa - roll;
        console.log("USA roll " + roll);
      } else {
        clearInterval(usaRoll);
        completeUsa = 0;
        $("#usa-tot").text(completeUsa);
      }
    }, 1000);

  })
});
