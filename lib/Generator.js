const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

function Generator() {


Generator.prototype.initializeGenerator = function () {
    inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is the name of the employee?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.engineer = new Engineer(name);

    // test the object creation
    console.table(this.engineer.getName());
  });

}
}

module.exports = Generator;