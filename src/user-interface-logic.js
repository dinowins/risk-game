import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import { dice } from "./../src/business-logic.js"; 

$(document).ready(function() {
  $(".usa").click(function(event) {
    setInterval(function() {
      let roll = dice();
      let murica = parseInt($("#usa-tot").text());
      let completeUsa = murica - roll;
      console.log(roll);
      console.log(completeUsa);
      $("#usa-tot").text(completeUsa);
    }, 1000);
  })
});
