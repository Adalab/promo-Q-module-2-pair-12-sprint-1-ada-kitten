"use strict";

const kittenCards = document.querySelector (".js-list");

const kittenImageOne = `https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg`;
const kittenNameOne = `Anastacio`;
const kittenDescOne = `Ruiseño, juguetón, le guta estar tranquilo y que nadie le
moleste. Es una maravilla acariciarle!`;
const kittenRaceOne = `British Shorthair`;


const kittenImageTwo = `https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg`;
const kittenNameTwo = `Fiona`;
const kittenDescTwo = `Reconocemos fácilmente al gato persa por su cara ancha y aplanada junto al abundante pelaje, que puede ser de colores.`;
const kittenRaceTwo = `Gato Persa`;


const kittenImageThree = `https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg`;
const kittenNameThree = `Cielo`;
const kittenDescThree = `El gato kohana es un felino proveniente de Hawái y, en realidad, no es una raza diferenciada, sino una mutación del gato sphynx`;
const kittenRaceThree = `Gato Kohana`;


const newForm= document.querySelector(".js-new-form");
newForm.classList.remove("collapsed");

const dataList = document.querySelector(".js-list");


const kittenOne = `<li class="card">
<article>
  <img class="card_img" src=${kittenImageOne} alt="gatito" />
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">${kittenDescOne}
  </p>
</article>
</li>`;


const kittenTwo = `<li class="card">
<img class="card_img"
  src=${kittenImageTwo} alt="gatito" />
<h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">${kittenDescTwo}
</p>
</li>`;


const kittenTrhee = `<li class="card">
<img class="card_img"
  src=${kittenImageThree}
  alt="gatito" />
<h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description">${kittenDescThree}</p>
</li>`;

dataList.innerHTML = kittenOne+kittenTwo+kittenTrhee

//Vamos por aquí

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;

if( kittenDesc1.includes(descrSearchText) ) {
  kittenCards.innerHTML = (kittenOne);
  }
  
  if( kittenDesc2.includes(descrSearchText) ) {
  //Completa el código
  }
  
  if( kittenDesc3.includes(descrSearchText) ) {
  //Completa el código
  }
    
