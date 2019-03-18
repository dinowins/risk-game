import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { dice } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".usa").click(function(event) {
    let completeUsa = 10;
    // let completeEurope = 10;
      setInterval(function() {
        if (completeUsa >= 1) {
          $("#usa-tot").text(completeUsa);
          let murica = parseInt($("#usa-tot").text());
          let roll = dice();
          completeUsa = murica - roll;
          console.log(roll);
          console.log(completeUsa);
        } else {
          clearInterval();
          completeUsa = 0;
          $("#usa-tot").text(completeUsa);
        }
      }, 1000);
  })
});
