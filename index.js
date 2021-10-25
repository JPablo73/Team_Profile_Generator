const inquirer = require("inquirer");
const fs = require("fs");
const validator = require("email-validator");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

var employees = [];

function generateHTML() {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta http-equiv="content-type" content="text-html; charset=utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>\n
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">\n
        <title>Team Profile</title>\n
    </head>\n
    <body>
        <header class="p-3 bg-danger text-white text-center"><h1>My Team</h1></header>
        <div class="container">
        <div id="card-container" class="d-flex justify-content-center flex-wrap p-2 bd-highlight">`;

  //generates employee html
  employees.forEach((employee) => (html += generateEmployeeHTML(employee)));
  //generates html
  html += `
    </div>
    </div>
    </body>
    </html>
    `;

  fs.writeFileSync("./dist/index.html", html);
}

function generateEmployeeHTML(employee) {
  //console.log(employee);
  var listItem, icon;
  switch (employee.getRole()) {
    case "Manager":
      listItem = `Office: ${employee.office}`;
      icon = "fa-mug-hot";
      break;

    case "Engineer":
      listItem = `Github: <a href="https://github.com/${employee.getGithub()}">
            https://github.com/${employee.getGithub()}</a>`;
      icon = "fa-glasses";
      break;

    case "Intern":
      listItem = `School: ${employee.getSchool()}`;
      icon = "fa-user-graduate";
      break;

    default:
      listItem = "";
      icon = "";
      console.log("Invlid employee type. Cannot render HTML");
      break;
  }

  let html = `<div class="card m-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white p-3">
            <h5 class="card-title ">${employee.getName()}</h5>
            <div class="card-subtitle mb-2">
                <i class="d-inline fas ${icon}"></i>
                <h6 class="d-inline">${employee.getRole()}</h6>
            </div>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a target="_blank" rel="noopener 
                    noreferrer" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">${listItem}</li>
            </ul>
        </div>
    </div>`;

  return html;
}

const employee_prompts = [
  {
    type: "input",
    message: "Enter name: ",
    name: "name",
  },
  {
    type: "input",
    message: "Enter ID: ",
    name: "id",
  },
  {
    type: "input",
    message: "Enter email: ",
    name: "email",
    validate: function (value) {
      if (validator.validate(value)) {
        return true;
      } else {
        return "Invalid Email! Try again! ";
      }
    },
  },
];

const managerLogin = [
  ...employee_prompts,
  {
    type: "input",
    message: "Enter office number: ",
    name: "office",
  },
];

const menuPrompts = [
  {
    type: "list",
    message:
      "Which employee do you want to add? (Select Finished if you are done)",
    choices: ["Engineer", "Intern", "Finished"],
    name: "menu",
  },
];

const EngineerPrompts = [
  ...employee_prompts,
  {
    type: "input",
    message: "Enter Github username: ",
    name: "github",
  },
];

const InternPrompts = [
  ...employee_prompts,
  {
    type: "input",
    message: "Enter school: ",
    name: "school",
  },
];

const addEngineer = async () => {
  let res = await inquirer.prompt(EngineerPrompts);
  let engineer = new Engineer(res.name, res.id, res.email, res.github);
  console.log(`Engineer ${engineer.getName()} was added!`);
  return engineer;
};

const addIntern = async () => {
  let res = await inquirer.prompt(InternPrompts);
  let intern = new Intern(res.name, res.id, res.email, res.school);
  console.log(`Intern: ${intern.getName()} was added!`);
  return intern;
};

const menu = async () => {
  const res = await inquirer.prompt(menuPrompts);
  switch (res.menu) {
    case "Engineer":
      const engineer = await addEngineer();
      employees.push(engineer);
      flag = true;
      break;
    case "Intern":
      const intern = await addIntern();
      employees.push(intern);
      flag = true;
      break;
    case "Finished":
      flag = false;
      break;
    default:
      console.log("Error, Try again");
      flag = true;
      break;
  }
  return flag;
};

const login = async function () {
  await inquirer.prompt(managerLogin).then((res) => {
    if (validator.validate(res.email)) {
      let manager = new Manager(res.name, res.id, res.email, res.office);
      employees.push(manager);
      console.log(`Manager ${manager.getName()} was added!`);
    } else {
      console.log("Invalid email entered");
    }
  });
  await menuCall();
  console.log("\nGenerating HTML file");
  generateHTML();
  console.log("File generated!");
  console.log(
    "Open the index.html file in 'dist' folder to view the webpage in your browser"
  );
};

const menuCall = async function () {
  while (await menu()) {}
};

login();
