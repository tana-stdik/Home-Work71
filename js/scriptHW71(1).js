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
        <button onclick="creatButtonRegistration()" class="btnNew" id="btn-add">Создать</button>
        </main>`);
}

function creatButtonRegistration() {
  document.getElementById("btn-add").insertAdjacentHTML("afterend",
     ` <button onclick="toggleRegistration()" class="btnNew" id="btn-reg">Создать Гражданина</button>
        `);
}


/*
function addStyleButton() {
  document.querySelector("btn-add").style.cssText = 
     `border: solid 2px #0919aa;
     border-radius: 10px;
     background-color: #0c22e6;
     color: white;
     width: 100%;
     padding: 20px;
     font-size: 16px;
     cursor: pointer;`;
} */

//Полная перезапись стилей
//style.cssText

// Получаем элемент

/*function toggleRegistration(registration) {
this.registration = registrationStatus;
updateCitizen('Registration status registered');
}

 */