/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let quien = who[generateRandom(who.length)];
  let que = what[generateRandom(what.length)];
  let cuando = when[generateRandom(when.length)];
  var element = document.getElementById("the-excuse"); //busca un id de un html
  element.textContent = quien + " " + que + " " + "my homework" + " " + cuando; // cambia el texto
  return console.log(quien + " " + que + " " + "my homework" + " " + cuando);
};

function generateRandom(max) {
  return Math.floor(Math.random() * max);
}
