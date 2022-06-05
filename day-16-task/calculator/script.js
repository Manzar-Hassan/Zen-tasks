//All created elements
const wrapper = document.createElement("div");
const container = document.createElement("div");
const displayArea = document.createElement("input");
const btnDiv = document.createElement("div");
const buttonGroup = document.createElement("div");
const addButton = document.createElement("button");
const clrButton = document.createElement("button");
const backButton = document.createElement("button");
const multiplyButton = document.createElement("button"); //7 8 9 /
const sevenButton = document.createElement("button");
const eightButton = document.createElement("button");
const nineButton = document.createElement("button");
const divideButton = document.createElement("button");
const fourButton = document.createElement("button");
const fiveButton = document.createElement("button");
const sixButton = document.createElement("button");
const minusButton = document.createElement("button");
const oneButton = document.createElement("button");
const twoButton = document.createElement("button");
const threeButton = document.createElement("button");
const dotButton = document.createElement("button");
const zeroButton = document.createElement("button");
const modulusButton = document.createElement("button");
const equalsButton = document.createElement("button");
const space = document.createElement("div");
const space1 = document.createElement("div");
const space2 = document.createElement("div");
const space3 = document.createElement("div");

const title = document.createElement('h1');
const p = document.createElement('p');


title.setAttribute('id','title');
title.setAttribute('class','txt-color');
title.innerText = 'DOM Calculator'

p.setAttribute('id','description');
p.setAttribute('class',' txt-color');
p.innerText = 'This calculator is solely made by DOM manipulation and CSS'

//main wrapper container
wrapper.setAttribute(
  "class",
  "container-fluid container-sm bg-white d-flex flex-column align-items-center justify-content-center height"
);

//container which holds calculator
container.setAttribute("class", "col-12 col-sm-6 text-center sh-effect mt-5");

//display area
displayArea.setAttribute(
  "class",
  "col-12 h-auto bg-light font-size txt-color  p-2 scroll no-border"
);
displayArea.setAttribute('id','result')
displayArea.setAttribute('value','0')
displayArea.setAttribute('disabled','')
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
addButton.setAttribute("id", "add");
addButton.innerText = "+";

clrButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
clrButton.setAttribute("id", "clear");
clrButton.innerText = "c";

backButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
backButton.setAttribute("id", "back");
backButton.innerText = "←";

multiplyButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
multiplyButton.setAttribute("id", "multiply");
multiplyButton.innerText = "x";

// --
sevenButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
sevenButton.setAttribute("id", "7");
sevenButton.innerText = "7";

eightButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
eightButton.setAttribute("id", "8");
eightButton.innerText = "8";

nineButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
nineButton.setAttribute("id", "9");
nineButton.innerText = "9";

divideButton.setAttribute(
  "class",
  "col btn btn-dark fs-6 pt-3 square rmv-border"
);
divideButton.setAttribute(
  "id", "divide"
);

divideButton.innerText = "/";

//
fourButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
fourButton.setAttribute("id", "4");
fourButton.innerText = "4";

fiveButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
fiveButton.setAttribute("id", "5");
fiveButton.innerText = "5";

sixButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
sixButton.setAttribute("id", "6");
sixButton.innerText = "6";

minusButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
minusButton.setAttribute("id", "subtract");
minusButton.innerText = "-";

//
oneButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
oneButton.setAttribute("id", "1");
oneButton.innerText = "1";

twoButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
twoButton.setAttribute("id", "2");
twoButton.innerText = "2";

threeButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
threeButton.setAttribute("id", "3");
threeButton.innerText = "3";

dotButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
dotButton.setAttribute("id", "dot");
dotButton.innerText = ".";

//
zeroButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
zeroButton.setAttribute("id", "0");
zeroButton.innerText = "0";

modulusButton.setAttribute(
  "class",
  "col btn btn-dark fs-3 square rmv-border"
);

modulusButton.setAttribute(
  "id", "00"
);
modulusButton.innerText = "%";

equalsButton.setAttribute("class", "col btn btn-dark fs-3 square rmv-border");
equalsButton.setAttribute("id", "equal");
equalsButton.innerText = "=";

//final append
document.body.append(wrapper);
wrapper.append(title, p, container);
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
  modulusButton,
  equalsButton
);

//display buttons and their functions..
function displayOneHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "1";
  } else {
    displayArea.value = displayArea.value + "1";
  }
}

function displayTwoHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "2";
  } else {
    displayArea.value = displayArea.value + "2";
  }
}

function displayThreeHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "3";
  } else {
    displayArea.value = displayArea.value + "3";
  }
}

function displayFourHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "4";
  } else {
    displayArea.value = displayArea.value + "4";
  }
}

function displayFiveHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "5";
  } else {
    displayArea.value = displayArea.value + "5";
  }
}

function displaySixHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "6";
  } else {
    displayArea.value = displayArea.value + "6";
  }
}

function displaySevenHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "7";
  } else {
    displayArea.value = displayArea.value + "7";
  }
}

function displayEightHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "8";
  } else {
    displayArea.value = displayArea.value + "8";
  }
}

function displayNineHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "9";
  } else {
    displayArea.value = displayArea.value + "9";
  }
}

function displayZeroHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "0";
  } else {
    displayArea.value = displayArea.value + "0";
  }
}

function displayDoubleZeroHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "";
  } else {
    displayArea.value = displayArea.value + "%";
  }
}

function clrScreenHandler() {
  displayArea.value = "0";
}

function backButtonHandler() {
  if (displayArea.value.length === 1) {
    displayArea.value = "0";
  } else {
    displayArea.value = displayArea.value.slice(0, -1);
  }
}

function addHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "0";
  } else {
    displayArea.value = displayArea.value + "+";
  }
}

function subtractHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "0";
  } else {
    displayArea.value = displayArea.value + "-";
  }
}

function multiplyHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "0";
  } else {
    displayArea.value = displayArea.value + "*";
  }
}

function divideHandler() {
  if (displayArea.value === "0" && displayArea.value.length === 1) {
    displayArea.value = "0";
  } else {
    displayArea.value = displayArea.value + "/";
  }
}

function dotButtonHandler() {
  let str = displayArea.value;

  if (str.includes(".")) {
    return;
  } else {
    displayArea.value = str + ".";
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
modulusButton.addEventListener("click", displayDoubleZeroHandler);
clrButton.addEventListener("click", clrScreenHandler);
backButton.addEventListener("click", backButtonHandler);
dotButton.addEventListener("click", dotButtonHandler);
addButton.addEventListener("click", addHandler);
minusButton.addEventListener("click", subtractHandler);
multiplyButton.addEventListener("click", multiplyHandler);
divideButton.addEventListener("click", divideHandler);

//operation buttons and their functions...
function outputHandler() {
  let res = eval(displayArea.value)

  if(Number.isInteger(res)) {
    displayArea.value = res;

  } else {
    displayArea.value = res.toFixed(4);
  }
}

equalsButton.addEventListener("click", outputHandler);


//onkey press events and verification
let validKeys = {
  '1': displayOneHandler,
  '2': displayTwoHandler,
  '3': displayThreeHandler,
  '4': displayFourHandler,
  '5': displayFiveHandler,
  '6': displaySixHandler,
  '7': displaySevenHandler,
  '8': displayEightHandler,
  '9': displayNineHandler,
  '0': displayZeroHandler,
  '+': addHandler,
  '%':displayDoubleZeroHandler,
  '-': subtractHandler,
  '*': multiplyHandler,
  '/': divideHandler,
  '.': dotButtonHandler,
  'Backspace': backButtonHandler,
  'Delete':clrScreenHandler,
  'Enter':outputHandler,
}

document.body.addEventListener('keypress', function(event) {
  if(validKeys.hasOwnProperty(event.key)) {
    validKeys[event.key]();

  } else {
    alert('Only Numbers are Allowed')
  }
});
