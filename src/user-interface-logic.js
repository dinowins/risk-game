import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { dice } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".usa").click(function(event) {
    let completeUsa = 30;
    let completeEurope = 10;
      let usaRoll = setInterval(function() {
        if (completeUsa >= 1) {
          if (completeEurope <= 0) {
            clearInterval(usaRoll);
          }
          $("#usa-tot").text(completeUsa);
          let murica = parseInt($("#usa-tot").text());
          let roll = dice();
          completeUsa = murica - roll;
          console.log("USA roll " + roll);
        } else {
          clearInterval();
          completeUsa = 0;
          $("#usa-tot").text(completeUsa);
        }
      }, 1000);

      let europeRoll = setInterval(function() {
        if (completeEurope >= 1) {
          $("#euro-tot").text(completeEurope);
          let euro = parseInt($("#euro-tot").text());
          let roll = dice();
          completeEurope = euro - roll;
          console.log("Europe roll: " + roll);
        } else {
          clearInterval(europeRoll);
          completeEurope = 0;
          $("#euro-tot").text(completeEurope);
        }
      }, 1000);
  })
});
