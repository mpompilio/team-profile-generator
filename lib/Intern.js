function Intern(name = '', email = '', school = '') {
    this.name = name;
  
    this.id = Math.floor(Math.random() * 101);
    this.email = email;
    this.school = school;

    this.getName = function(){
        return this.name;
      }
  }
  
  module.exports = Intern;