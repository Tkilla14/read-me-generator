//  packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter a name for the project",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the purpose and function of the project",
  },
  {
    type: "checkbox",
    name: "licnse",
    message: "Select a license applicable for the project",
    choices: ["MIT", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List project dependencies here.",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the lanuages & technologies for the project",
  },
  {
    type: "input",
    name: "creator",
    message: "Insert Github username.",
  },
  {
    type: "input",
    name: "name",
    message: "Enter your full name.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use Github usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// initialize app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Generating Professional README.md File...");
      writeToFile('README.md', generateMarkdown({ ...responses }));
    });
}

// Function call to initialize app
init();
