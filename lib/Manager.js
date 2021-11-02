function Manager(name = '', email = '', officeNumber) {
    this.name = name;
  
    this.id = Math.floor(Math.random() * 101);
    this.email = email;
    this.officeNumber = officeNumber;

    this.getName = function(){
        return this.name;
      }
  }
  
  module.exports = Manager;