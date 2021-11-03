const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

const employees = [];

function Generator() {


Generator.prototype.initializeGenerator = function () {
    inquirer
  .prompt([{
    type: 'text',
    name: 'name',
    message: 'What is the name of the employee?'
  }, 
  {
    type: 'list',
    name: 'role',
    message: 'What is the employees role?',
    choices: ['Manager', 'Engineer', 'Intern']
  },
  {
    type: 'text',
    name: 'id',
    message: 'What is the employees ID?'
  }, 
  {
    type: 'text',
    name: 'email',
    message: 'What is the employees email?'
  }


])
.then(function({name, id, email, role}){
  let roleChoice;
  if (role === 'Manager') {
    roleChoice = 'What is employees office number?';
  } else if (role === 'Engineer'){
    roleChoice = 'What is employees github username?';
  } else {
    roleChoice = 'What is employees school?';
  }
  inquirer
  .prompt([{
    type: 'text',
    name: 'roleChoice',
    message: `${roleChoice}`
  },
  {
    type: 'list',
    name: 'add',
    choices: ['yes', 'no']
  }])
  .then(function({roleChoice, add}) {
    let employee;
    if (role === 'Manager') {
      employee = new Manager(name, id, email, roleChoice);
    } else if (role === 'Engineer') {
      employee = new Engineer(name, id, email, roleChoice);
    } else {
      employee = new Intern(name, id, email, roleChoice);
    }
    employees.push(employee);

    if(add === 'yes') {
      Generator.prototype.initializeGenerator();
    } else {
      console.log(employees);
    }
  })
})


}
}

module.exports = Generator;