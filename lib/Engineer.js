function Engineer(name = '', email = '', github = '') {
    this.name = name;
  
    this.id = Math.floor(Math.random() * 101);
    this.email = email;
    this.github = github;
  

  this.getName = function(){
    return this.name;
  }


}
  
  module.exports = Engineer;