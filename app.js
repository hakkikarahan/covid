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

  // console.log(turk);




  // console.log(hepsi);
  // console.log(turk);

  /* hepsi.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.value
    global.appendChild(li);
  }) */

  trhepsi = ['Yeni Vaka', 'Toplam Vaka', 'Yeni Ölüm', 'Toplam Ölüm', 'Yeni İyileşen', 'Toplam İyileşen'];
  trturk = ['Ülke', 'Ülke Kodu', 'isim', 'Yeni Vaka', 'Toplam Vaka', 'Yeni Ölüm', 'Toplam Ölüm', 'Yeni İyileşen', 'Toplam İyileşen', 'Tarih'];;


  // for (var [key, val] of Object.entries(hepsi)) {
  let i = 0;
  for (var val in hepsi) {

    // const liw = document.createElement("li");
    // liw.textContent = `${val}: ${hepsi[val]}`
    // global.appendChild(liw);

    // console.log(trhepsi[i])
    const divh = document.createElement('div');
    divh.setAttribute('class', 'card');
    divh.textContent = `${trhepsi[i]}: ${hepsi[val]}`
    global.appendChild(divh);
    i++;
  }

  i = 0;
  for (val in turk) {
    const divt = document.createElement('div');
    divt.setAttribute('class', 'card2');
    divt.textContent = `${trturk[i]}: ${turk[val]}`;
    turkey.appendChild(divt);

    /* const lit = document.createElement("li");
    lit.textContent = `${val}: ${turk[val]}`;
    turkey.appendChild(lit); */
    i++;
  }


  /* 
    for (var val in turk) {
      const lit = document.createElement("li");
      lit.textContent = `${val}: ${turk[val]}`;
      turkey.appendChild(lit);
    } */

  // console.log(data.Countries.filter(item => item.Country == 'Turkey'));

  /* data.forEach(item => {
    console.log(item);

  }) */


}


req.send();