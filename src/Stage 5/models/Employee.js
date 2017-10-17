export default class Employee {
  // constructor
  constructor(id, name, phone, title) {
    this.name= name;
    this.id = id;
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
   updateTitle(string){
    this.title = string;
   }
}