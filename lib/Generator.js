const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const fs = require('fs');

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
      .then(function ({
        name,
        id,
        email,
        role
      }) {
        let roleChoice;
        if (role === 'Manager') {
          roleChoice = 'What is employees office number?';
        } else if (role === 'Engineer') {
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
            }
          ])
          .then(function ({
            roleChoice,
            add
          }) {
            let employee;
            if (role === 'Manager') {
              employee = new Manager(name, id, email, roleChoice);
            } else if (role === 'Engineer') {
              employee = new Engineer(name, id, email, roleChoice);
            } else {
              employee = new Intern(name, id, email, roleChoice);
            }
            employees.push(employee);
            Generator.prototype.card(employee);

            if (add === 'yes') {
              Generator.prototype.initializeGenerator();
            } else {
              Generator.prototype.footer();
            }
          })
      })


  }
  Generator.prototype.header = function () {
    const header = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <title>Employee Profile's</title>
  </head>
  <body>
      <div class="row justify-content-center">
      <header class="col-12 col-lg-3 bg-dark text-light sticky-top d-flex flex-column p-4 p-lg-3">
          <h1 class="text-center">Employee Profiles</h1>
      </header>
      </div>
      <div class="row align-items-center justify-content-center p-5">`;
    fs.writeFile('./profile.html', header, function (err) {
      if (err) {
        console.log(err);
      }
    })
  }

  Generator.prototype.card = function (employee) {

    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();

    let card = '';

    if (role === 'Manager'){
      const officeNumber = employee.getOfficeNumber();
      card = `        
      <div class="card" style="width: 18rem;">
      <div class="card-body bg-info">
          <h5 class="card-title text-white">${name}</h5>
          <h4 class="card-text text-white">Manager</h4>
          </div>
          <div>
              <ul>
                  <li>ID: ${id} </li>
                  <li>Email: ${email} </li>
                  <li>Office Number: ${officeNumber} </li>
              </ul>
          </div>
    
      </div>`;
    } else if(role === 'Engineer'){
      const github = employee.getGithub();
      card = `        
      <div class="card" style="width: 18rem;">
      <div class="card-body bg-info">
          <h5 class="card-title text-white">${name}</h5>
          <h4 class="card-text text-white">Engineer</h4>
          </div>
          <div>
              <ul>
                  <li>ID: ${id} </li>
                  <li>Email: ${email} </li>
                  <li>GitHub: <a href="https://www.github.com/${github}">${github}</a></li>
              </ul>
          </div>
    
      </div>`;

    } else {
      const schoolName = employee.getSchool();
      card = `        
      <div class="card" style="width: 18rem;">
      <div class="card-body bg-info">
          <h5 class="card-title text-white">${name}</h5>
          <h4 class="card-text text-white">Intern</h4>
          </div>
          <div>
              <ul>
                  <li>ID: ${id} </li>
                  <li>Email: ${email} </li>
                  <li>School: ${schoolName} </li>
              </ul>
          </div>
    
      </div>`;
    }

    fs.appendFile('./profile.html', card, function (err) {
      if (err) {
        console.log(err);
      }
    })
  }

  Generator.prototype.footer = function () {
    const footer = `
    </div>
    
    </body>
    </html>`;
    fs.appendFile('./profile.html', footer, function(err) {
      if (err) {
        console.log(err);
      }
    })
  }

}

module.exports = Generator;