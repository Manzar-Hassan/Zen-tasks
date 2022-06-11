//html elements
const heading = document.createElement("h1");
const para = document.createElement("p");
const tableContainer = document.createElement("div");
const buttonContainer = document.createElement("div");

//setting attributes of every element
heading.setAttribute("id", "title");
para.setAttribute("id", "description");
tableContainer.setAttribute("class", "table-responsive");

//setting innerText and innerHTML properties of created tags
heading.innerText = "Pagination";
para.innerText = "This page is about creating a Pagination using HTML and CSS";
tableContainer.innerHTML = `
  <table id="table" class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td id="id">a</td>
        <td id="name">a</td>
        <td id="email">a</td>
      </tr>
    </tbody>
  </table>
`;

//creating buttons inside button container for pagination
buttonContainer.innerHTML = `
<div id="buttons" class="d-flex justify-content-center">
  <div class="btn-group" role="group" aria-label="Basic example">
    <button id="first" class="btn btn-dark" onClick="activeToggle(id)">First</button>
    <button id="previous" class="btn btn-dark" onClick="activeToggle(id)">Previous</button>
  </div>
  <div class="mx-1">
    <div class="btn-group" role="group" aria-label="Basic example" id="pages">
    <button class="btn btn-outline-secondary active" id='1' onClick="activeToggle(id)">1</button>
    <button class="btn btn-outline-secondary" id='2' onClick="activeToggle(id)">2</button>
    <button class="btn btn-outline-secondary" id='3' onClick="activeToggle(id)">3</button>
    <button class="btn btn-outline-secondary" id='4' onClick="activeToggle(id)">4</button>
    <button class="btn btn-outline-secondary" id='5' onClick="activeToggle(id)">5</button>
    </div>
  </div>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button id="next" class="btn btn-dark" onClick="activeToggle(id)">Next</button>
    <button id="last" class="btn btn-dark" onClick="activeToggle(id)">Last</button>
  </div>
</div>
`;

//getting data and printing it on table from api call
async function pagination(id) {
  try {
    const url =
      "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json";

    const res = await fetch(url);
    const data = await res.json();

    id = parseInt(id);

    document.getElementById('id').innerText = `${data[id-1].id}`
    document.getElementById('name').innerText = `${data[id-1].name}`
    document.getElementById('email').innerText = `${data[id-1].email}`

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//keeping track or current active id so that when a different button is focused we can toggle active class
let currentActiveId = 1;

//this function manipulates id according to buttons user press
function activeToggle(id) {
  currentActiveId = parseInt(currentActiveId);

  switch (id) {
    case "first":
      id = 1;
      break;
    case "previous":
      currentActiveId - 1 <= 0 ? id = currentActiveId : id = currentActiveId -1;
      break;
    case "next":
      currentActiveId + 1 > 100 ? id = currentActiveId : id = currentActiveId + 1;
      break;
    case "last":
      id = 100;
      break;
  }

  if(id===currentActiveId) return;  //if current active button and id are same we dont need to do anything

  displayPages(100, 5, parseInt(id));  //this function call creates next set of buttons and also responsible for toggling active state and keeping the selected button in middle
  currentActiveId = id;   //updating the current active id every time a new button pressed
}

//this function checks if an element is present in DOM or not
function isExists(id) {
  return document.body.contains(document.getElementById(id));
}

//this function creates new set of buttons every time and also keeps the selected button in middle
function displayPages(total, maxPagesToShow, currentPage) {
  const page = document.getElementById("pages");

  //logic to calculate new range of buttons
  const half = Math.floor(maxPagesToShow / 2);
  let to = maxPagesToShow;   //it represents maximum range 

  if (currentPage + half >= total) {   //e.g 97 + (5/2) > 100
    to = total;
  } else if (currentPage > half) {      //e.g 7 + (5/2) > (5/2)
    to = currentPage + half;
  }

  let from = to - maxPagesToShow;       // starting range of buttons

  page.innerHTML = "";           //deleting existing buttons of pagination in dom. e.g deleting buttons 1, 2, 3, 4, 5
  from++;                        //since index starts with 0 we have to increase it by 1


  //creating new set of buttons using form and to range calculated
  for (let i = from; i <= to; i++) {
    page.innerHTML += `<button class="btn btn-outline-secondary" id='${i}' onClick="activeToggle(id)">${i}</button>`;
  }


  //setting active state
  if (currentActiveId !== currentPage) {
    if(isExists(currentActiveId)) {
      document.getElementById(currentActiveId).classList.remove("active");
    }
    document.getElementById(currentPage).classList.add("active");
  }

  //calling pagination to display data from api in our table
  pagination(currentPage);
}

//appending all created elements to html body
document.body.append(heading, para, tableContainer, buttonContainer);

//calling this function at start once since page 1 is by default selected and we have to display page 1 data
pagination(1);