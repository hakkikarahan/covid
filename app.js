var req = new XMLHttpRequest();

req.open('GET', 'https://api.covid19api.com/summary', true);

// https://api.covid19api.com/summary

function getir() {
  let data = this.response;
  console.log(data);

  // data.forEach(item => {

  //   console.log('hello');

  // });
}

// req.onload = getir();


const container = document.getElementById("container");

const global = document.getElementById("global");
const turkey = document.getElementById("turkey");


req.onload = function () {

  let data = JSON.parse(this.response);
  let hepsi = data.Global;
  let turk = data.Countries.filter(item => item.Country == 'Turkey')[0];



  // console.log(hepsi);
  // console.log(turk);

  /* hepsi.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.value
    global.appendChild(li);
  }) */

  for (var val in hepsi) {
    // console.log(`Key: ${val} value: ${hepsi[val]}`);
    const liw = document.createElement("li");
    liw.textContent = `${val}: ${hepsi[val]}`
    global.appendChild(liw);
  }

  /* turk.forEach(item => {
    const lit = document.createElement("li");
    lit.textContent = `${val}: ${turk[val]}`;
    turkey.appendChild(lit);
  }) */

  for (var val in turk) {
    const lit = document.createElement("li");
    lit.textContent = `${val}: ${turk[val]}`;
    turkey.appendChild(lit);
  }
  // console.log(data.Countries.filter(item => item.Country == 'Turkey'));

  /* data.forEach(item => {
    console.log(item);

  }) */


}


req.send();