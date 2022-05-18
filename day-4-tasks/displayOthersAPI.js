//url - https://restcountries.com/v2/all

const http = new XMLHttpRequest();
http.onreadystatechange = handleRequest;
http.open("GET", "https://restcountries.com/v3.1/all");
http.send();


// this will display all the countries name, region, sub region and population

let countryName = data[i].name.common;
let region = data[i].region;
let subRegion = data[i].subregion;
let population = data[i].population;

function handleRequest() {
  if (this.readyState === 4) {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      for(let i=0; i<data.length; i++) {
        console.log(countryName, region, subRegion, population);
      }
    }
  }
}