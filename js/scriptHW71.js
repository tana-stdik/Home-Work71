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
    <div class="entry-field">
      <label for="is-registration">
        Вы зарегистрированы?
        <input type="checkbox" id="is-registration" value="true">
      </label>
    </div>
     <button onclick="enterDataAdress(this)" class="btn-new" id="btn-adr">Ввести адрес</button> 
</form>
<p id="valueInput"></p>
<p id="valueInput1"></p>
<p id="valueInput2"></p>
<p id="valueInput3"></p>
       `);
   } 
  }
 
  function enterDataAdress(insBtnReg) { 

    let firstNameValue = document.getElementById("first-name").value;
    console.log(firstNameValue);
    let lastNameValue = document.getElementById("last-name").value;
    console.log(lastNameValue);
    let ageValue = document.getElementById("age").value;
    console.log(ageValue);
    let isRegistrationValue = '';
    if (document.getElementById("is-registration").checked) {
      isRegistrationValue = true;
      console.log(isRegistrationValue);
    } else {
      isRegistrationValue = false;
      console.log(isRegistrationValue);
    }

    let Citizen = class {
      constructor(firstName, lastName, age, isRegistration = false, adress = null) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isRegistration = isRegistration;
        this.adress = adress;
      }
    }

    let citizen = new Citizen(firstNameValue, lastNameValue, ageValue, isRegistrationValue);
    console.log(citizen);

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
      <button class="btn-new" type="button"  onclick="getValue()"> 
      click me!! 
  </button> 
  </form>
         `); 
     }
    }

  function getValue() {
    let countryValue = document.getElementById("country").value;
    console.log(countryValue);
    let cityValue = document.getElementById("city").value;
    console.log(cityValue);
    let streetValue = document.getElementById("street").value;
    console.log(streetValue);
    let houseValue = document.getElementById("house").value;
    console.log(houseValue);
    let flatValue = document.getElementById("flat").value;
    console.log(flatValue);


    let Adress = class {
      constructor(country, city, street, house, flat) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.house = house;
        this.flat = flat;
      }
    };

    let adress = new Adress(countryValue, cityValue, streetValue, houseValue, flatValue);
    console.log(adress);
  }
