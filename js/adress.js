/**/


let Adress = class {
  constructor(country, city, street, house) {
    this.country= country;
    this.city= city;
    this.street= street;
    this.house= house;
    this.flat= flat;
  }
  sayAdress(country, city, street, house) {
    prompt('Страна', this.country);
    prompt('Город', this.city);
    prompt('Улица', this.street);
    prompt('Номер дома', this.house);
    prompt('Номер квартиры', this.flat);
  }
};

let adress = new Adress
export default adress;
