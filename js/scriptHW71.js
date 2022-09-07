//import citizen from "./citizen.js";

function menuDropDown() {
  document.getElementById("my-dropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-cont");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function creatButtonAdd() {
  document.getElementById("header").insertAdjacentHTML("afterend",
     ` <main id="main">
        <button onclick="creatButtonCitizen(this)" class="btn-new" id="btn-add">Создать</button>
        </main>`);
}

function creatButtonCitizen(insBtnAdd) {
  insBtnAdd.disabled = true;
  if(document.getElementById("btn-reg")===null) {
    document.getElementById("btn-add").insertAdjacentHTML("afterend",
    ` <button onclick="enterDataCitizen(this)" class="btn-new" id="btn-reg">Создать Гражданина</button>
       `);
   } 
  }

function enterDataCitizen(insBtnReg) { 
  insBtnReg.disabled = true;
  if(document.getElementById("form-citizen")===null) {
    document.getElementById("btn-reg").insertAdjacentHTML("afterend",
    `  <form id="form-citizen">
    <div class="entry-field">
      <label for="first-name">Имя:</label>
      <input type="text" id="first-name" />
    </div>
    <div class="entry-field">
      <label for="last-name">Фамилия:</label>
      <input type="text" id="last-name" />
    </div>
    <div class="entry-field">
      <label for="age">Возраст:</label>
      <input type="number" id="age" />
    </div>
     <button onclick="enterDataAdress(this)" class="btn-new" id="btn-adr">Ввести адрес</button> 
</form>
<p id="valueInput"></p>
<p id="valueInput1"></p>
<p id="valueInput2"></p>
       `); 
       
    let inputValueFirstName = document.getElementById("first-name").value; 
    document.getElementById("valueInput").innerHTML = inputValueFirstName;
    let inputValueLastName = document.getElementById("last-name").value; 
    document.getElementById("valueInput1").innerHTML = inputValueLastName; 
    let inputValueAge = document.getElementById("age").value; 
    document.getElementById("valueInput2").innerHTML = inputValueAge; 
  
   }
  }
 
  function enterDataAdress(insBtnReg) { 
    insBtnReg.disabled = true;
    if(document.getElementById("form-adress")===null) {
      document.getElementById("form-citizen").insertAdjacentHTML("afterend",
      `  <form id="form-adress">
      <div class="entry-field">
        <label for="country">Страна:</label>
        <input type="text" id="country" />
      </div>
      <div class="entry-field">
        <label for="city">Город:</label>
        <input type="text" id="city" />
      </div>
      <div class="entry-field">
        <label for="street">Улица:</label>
        <input type="text" id="street" />
      </div>
      <div>
        <label for="house">Номер дома:</label>
        <input type="number" id="house" />
      </div>
      <div class="entry-field">
        <label for="flat">Номер квартиры:</label>
        <input type="number" id="flat" />
      </div>
      <button type="button"  onclick="getValue()"> 
      click me!! 
  </button> 
  </form>
         `); 
     }
    }
/*let name= document.getElementById("country").value; 
let name= document.getElementById("city").value; 
let name= document.getElementById("street").value; 
let name= document.getElementById("house").value; 
let name= document.getElementById("flat").value; 
const adres = new Adress(country, city, street, house, flat);

 */
  const getValue = () =>{
    let inputValueFirstName = document.getElementById("first-name").value; 
    document.getElementById("valueInput").innerHTML = inputValueFirstName;
    let inputValueLastName = document.getElementById("last-name").value; 
    document.getElementById("valueInput1").innerHTML = inputValueLastName; 
    let inputValueAge = document.getElementById("age").value; 
    document.getElementById("valueInput2").innerHTML = inputValueAge; 
  }
