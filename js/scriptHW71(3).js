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
        <div>
          <button onclick="creatButtonCitizen(this)" class="btn-new" id="btn-add">Создать</button>
        </div>
      </main>
        `);
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
    <button type="button" onclick="creatButtonRegistration(this)" class="btn-new" id="btn-add"> 
    click me!! 
</button> 
</form>
<p id="valueInput"></p> 
<p id="valueInput1"></p> 
<p id="valueInput2"></p> 
       `); 
   }
  }