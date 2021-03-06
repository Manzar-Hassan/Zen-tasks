//url - https://restcountries.com/v2/all

const http = new XMLHttpRequest();
http.onreadystatechange = handleRequest;
http.open("GET", "https://restcountries.com/v3.1/all");
http.send();


// this will display all the countries name, region, sub region and population

function handleRequest() {
  if (this.readyState === 4) {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      for(let i=0; i<data.length; i++) {
        console.log(data[i].name.common, data[i].region, data[i].subregion, data[i].population);
      }
    }
  }
}
