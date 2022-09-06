import adress from "./adress.js";

let Citizen = class {
  constructor(firstName, lastName, age, registration) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.adress = adress;
  this.registration = registration;
}
sayCitizen(firstName, lastName, age, registration) {
  let firstName = document.getElementById("first-name").value; 
  let lastName = document.getElementById("last-name").value;
  let age = document.getElementById("age").value; 
}
 };
 
let citizen = new Citizen
export default citizen;