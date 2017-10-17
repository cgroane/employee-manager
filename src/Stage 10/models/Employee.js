export default class Employee {
    constructor(id, name, phone, title) {
        this.id = id,
        this.name = name,
        this.phone = phone,
        this.title = title
    }

    updateName(string) {
        this.name = string;
    }

    updatePhone(string) {
        this.phone = string;
    }

    updateTitle(string) {
        this.title = string;
    }
}