class Employee {
    constructor(name = '', email = ''){
    this.name = name;
  
    this.id = Math.floor(Math.random() * 101);
    this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee;