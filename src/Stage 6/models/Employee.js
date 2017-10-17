export default class Employee {
  // constructor
  constructor(id, name, phone, title){
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  // updateName
  updateName(string) {
    this.name = string;
  }

  // updatePhone
  updatePhone(string) {
    this.phone = string;
  }

   // updateTitle
   updateTitle(string) {
     this.title = string;
   }
}