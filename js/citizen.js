import adress from "./adress.js";

let Citizen = class {
  constructor(firstName, lastName, age, isRegistered = false, adress) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isRegistered = isRegistered;
  this.adress = adress;
  }
};
 
let citizen = new Citizen();
export default citizen;