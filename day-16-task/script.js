//All created elements
const wrapper = document.createElement("div");
const container = document.createElement("div");
const displayArea = document.createElement("div");
const btnDiv = document.createElement("div");
const buttonGroup = document.createElement("div");
const addButton = document.createElement("div");
const clrButton = document.createElement("div");
const backButton = document.createElement("div");
const multiplyButton = document.createElement("div"); //7 8 9 /
const sevenButton = document.createElement("div");
const eightButton = document.createElement("div");
const nineButton = document.createElement("div");
const divideButton = document.createElement("div");
const fourButton = document.createElement("div");
const fiveButton = document.createElement("div");
const sixButton = document.createElement("div");
const minusButton = document.createElement("div");
const oneButton = document.createElement("div");
const twoButton = document.createElement("div");
const threeButton = document.createElement("div");
const dotButton = document.createElement("div");
const zeroButton = document.createElement("div");
const doubleZeroButton = document.createElement("div");
const equalsButton = document.createElement("div");
const space = document.createElement("div");
const space1 = document.createElement("div");
const space2 = document.createElement("div");
const space3 = document.createElement("div");

//main wrapper container
wrapper.setAttribute(
  "class",
  "container-fluid container-sm bg-white d-flex align-items-center justify-content-center height"
);

//container which holds calculator
container.setAttribute("class", "col-12 col-sm-6 text-center sh-effect");

//display area
displayArea.setAttribute(
  "class",
  "col-12 h-auto bg-light font-size txt-color  p-2 scroll"
);
displayArea.innerText = "0";

//div container for row
btnDiv.setAttribute("class", "container");

//div that holds all the buttons
buttonGroup.setAttribute("class", "row");

//spaces for new button line
space.setAttribute("class", "w-100");
space1.setAttribute("class", "w-100");
space2.setAttribute("class", "w-100");
space3.setAttribute("class", "w-100");

//all the buttons
addButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
addButton.innerText = "+";

clrButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
clrButton.innerText = "c";

backButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
backButton.innerText = "←";

multiplyButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
multiplyButton.innerText = "x";

// --
sevenButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
sevenButton.innerText = "7";

eightButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
eightButton.innerText = "8";

nineButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
nineButton.innerText = "9";

divideButton.setAttribute(
  "class",
  "col btn btn-dark fs-6 pt-3 square rmv-border"
);
divideButton.innerText = "/";

//
fourButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
fourButton.innerText = "4";

fiveButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
fiveButton.innerText = "5";

sixButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
sixButton.innerText = "6";

minusButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
minusButton.innerText = "-";

//
oneButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
oneButton.innerText = "1";

twoButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
twoButton.innerText = "2";

threeButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
threeButton.innerText = "3";

dotButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
dotButton.innerText = ".";

//
zeroButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
zeroButton.innerText = "0";

doubleZeroButton.setAttribute(
  "class",
  "col btn btn-dark fs-3 square rmv-border"
);
doubleZeroButton.innerText = "00";

equalsButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
equalsButton.innerText = "=";

//final append
document.body.append(wrapper);
wrapper.appendChild(container);
container.append(displayArea, btnDiv);
btnDiv.append(buttonGroup);
buttonGroup.append(
  clrButton,
  backButton,
  dotButton,
  multiplyButton,
  space,
  sevenButton,
  eightButton,
  nineButton,
  divideButton,
  space1,
  fourButton,
  fiveButton,
  sixButton,
  minusButton,
  space2,
  oneButton,
  twoButton,
  threeButton,
  addButton,
  space3,
  zeroButton,
  doubleZeroButton,
  equalsButton
);

//display buttons and their functions..
function displayOneHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "1";
  } else {
    displayArea.innerText = displayArea.innerText + "1";
  }
}

function displayTwoHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "2";
  } else {
    displayArea.innerText = displayArea.innerText + "2";
  }
}

function displayThreeHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "3";
  } else {
    displayArea.innerText = displayArea.innerText + "3";
  }
}

function displayFourHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "4";
  } else {
    displayArea.innerText = displayArea.innerText + "4";
  }
}

function displayFiveHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "5";
  } else {
    displayArea.innerText = displayArea.innerText + "5";
  }
}

function displaySixHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "6";
  } else {
    displayArea.innerText = displayArea.innerText + "6";
  }
}

function displaySevenHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "7";
  } else {
    displayArea.innerText = displayArea.innerText + "7";
  }
}

function displayEightHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "8";
  } else {
    displayArea.innerText = displayArea.innerText + "8";
  }
}

function displayNineHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "9";
  } else {
    displayArea.innerText = displayArea.innerText + "9";
  }
}

function displayZeroHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText + "0";
  }
}

function displayDoubleZeroHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText + "00";
  }
}

function clrScreenHandler() {
  displayArea.innerText = "0";
}

function backButtonHandler() {
  if (displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText.slice(0, -1);
  }
}

function addHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText + "+";
  }
}

function subtractHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText + "-";
  }
}

function multiplyHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText + "*";
  }
}

function divideHandler() {
  if (displayArea.innerText === "0" && displayArea.innerText.length === 1) {
    displayArea.innerText = "0";
  } else {
    displayArea.innerText = displayArea.innerText + "/";
  }
}

function dotButtonHandler() {
  let str = displayArea.innerText;

  if (str.includes(".")) {
    return;
  } else {
    displayArea.innerText = str + ".";
  }
}

oneButton.addEventListener("click", displayOneHandler);
twoButton.addEventListener("click", displayTwoHandler);
threeButton.addEventListener("click", displayThreeHandler);
fourButton.addEventListener("click", displayFourHandler);
fiveButton.addEventListener("click", displayFiveHandler);
sixButton.addEventListener("click", displaySixHandler);
sevenButton.addEventListener("click", displaySevenHandler);
eightButton.addEventListener("click", displayEightHandler);
nineButton.addEventListener("click", displayNineHandler);
zeroButton.addEventListener("click", displayZeroHandler);
doubleZeroButton.addEventListener("click", displayDoubleZeroHandler);
clrButton.addEventListener("click", clrScreenHandler);
backButton.addEventListener("click", backButtonHandler);
dotButton.addEventListener("click", dotButtonHandler);
addButton.addEventListener("click", addHandler);
minusButton.addEventListener("click", subtractHandler);
multiplyButton.addEventListener("click", multiplyHandler);
divideButton.addEventListener("click", divideHandler);

//operation buttons and their functions...
function outputHandler() {
  let res = eval(displayArea.innerText);

  if(Number.isInteger(res)) {
    displayArea.innerText = res;

  } else {
    displayArea.innerText = res.toFixed(4);
  }
}

equalsButton.addEventListener("click", outputHandler);
