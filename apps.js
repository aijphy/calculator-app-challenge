var fullCalc = "";
var newCalc = false;

var themePref = JSON.parse(window.localStorage.getItem("prefers-color-scheme"));

function insert(value) {
  var cons = document.getElementById("console");
  if (newCalc) {
    cons.value = "";
    fullCalc = "";
    newCalc = false;
  }
  cons.value = cons.value + value;
}

function addOperator(op) {
  var cons = document.getElementById("console");
  if (newCalc) {
    cons.value = "";
    newCalc = false;
  }
  fullCalc = fullCalc + cons.value + op;
  cons.value = "";
}

function equals() {
  addOperator("");
  var cons = document.getElementById("console");
  //fullCalc = expression.evaluate(Parser.parse(fullCalc));
  cons.value = Function('"use strict";return (' + fullCalc + ")")();
  fullCalc = cons.value;
  newCalc = true;
  //cons.style.color = "blue";
}

function reset() {
  var cons = document.getElementById("console");
  cons.value = "";
  fullCalc = "";
  newCalc = false;
}

// Select Theme:
function initialTheme() {
  if (themePref == null) {
    setTheme(1);
  } else {
    setTheme(themePref);
  }
}
function setTheme(x) {
  window.localStorage.setItem("prefers-color-scheme", x);
  var cons = document.getElementById("console");
  document.getElementById("toggle1").style.backgroundColor = "transparent";
  document.getElementById("toggle2").style.backgroundColor = "transparent";
  document.getElementById("toggle3").style.backgroundColor = "transparent";
  document.getElementById("equals").style = "null";

  document.getElementById("toggle" + x).style.backgroundColor =
    "var(--key-background1b)";
  cons.style = "null";
  if (x == 1) {
    document.documentElement.style = "null";
  } else if (x == 2) {
    cons.style.backgroundColor = "white";
    document.documentElement.style.setProperty(
      "--main-background1",
      " hsl(0, 0%, 90%)"
    );
    document.documentElement.style.setProperty(
      "--keypad-background1",
      " hsl(0, 5%, 81%)"
    );
    document.documentElement.style.setProperty(
      "--screen-background1:",
      "hsl(0, 0%, 93%)"
    );
    document.documentElement.style.setProperty(
      "--key-background1a",
      "hsl(185, 42%, 37%)"
    );

    document.documentElement.style.setProperty(
      "--key-shadow1a",
      "hsl(185, 58%, 25%)"
    );
    document.documentElement.style.setProperty(
      "--key-background1b",
      "hsl(25, 98%, 40%)"
    );
    document.documentElement.style.setProperty(
      "--key-shadow1b",
      "hsl(25, 99%, 27%)"
    );

    document.documentElement.style.setProperty(
      "--key-background1c",
      "hsl(45, 7%, 89%)"
    );
    document.documentElement.style.setProperty(
      "--key-shadow1c",
      "hsl(35, 11%, 61%)"
    );
    document.documentElement.style.setProperty("--text1", "hsl(60, 10%, 19%)");
    document.documentElement.style.setProperty("--text1a", "hsl(60, 10%, 19%)");
  } else if (x == 3) {
    document.documentElement.style.setProperty(
      "--main-background1",
      "hsl(268, 75%, 9%)"
    );

    document.documentElement.style.setProperty(
      "--keypad-background1",
      "hsl(268, 71%, 12%)"
    );

    document.documentElement.style.setProperty(
      "--screen-background1",
      "hsl(268, 71%, 12%)"
    );

    /* #### Keys */

    document.documentElement.style.setProperty(
      "--key-background1a",
      "hsl(281, 89%, 26%)"
    );

    document.documentElement.style.setProperty(
      "--key-shadow1a",
      "hsl(285, 91%, 52%)"
    );

    document.documentElement.style.setProperty(
      "--key-background1b",
      "hsl(176, 100%, 44%)"
    );

    document.documentElement.style.setProperty(
      "--key-shadow1b",
      "hsl(177, 92%, 70%)"
    );

    document.documentElement.style.setProperty(
      "--key-background1c",
      "hsl(268, 47%, 21%)"
    );

    document.documentElement.style.setProperty(
      "--key-shadow1c",
      "hsl(290, 70%, 36%)"
    );

    /* #### Text */

    document.documentElement.style.setProperty("--text1", "hsl(52, 100%, 62%)");

    document.documentElement.style.setProperty(
      "--text1a",
      "hsl(52, 100%, 62%)"
    );

    document.getElementById("equals").style.color = "hsl(198, 20%, 13%)";

    //document.documentElement.style.setProperty(  "--text1a","hsl(198, 20%, 13%)");
  }
}
