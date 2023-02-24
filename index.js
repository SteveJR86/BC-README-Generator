const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter your project title',
    default: 'Project',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description for your project',
  },
  {
    type: 'input',
    name: 'installInst',
    message: 'Please enter any installation instructions for your project',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter any usage information for your project',
  },
  {
    type: 'input',
    name: 'contGuide',
    message: 'Please enter contribution guidelines for your project',
  },
  {
    type: 'input',
    name: 'testInst',
    message: 'Please enter any test instructions for your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose your project license',
    default: 'None',
    choices: ['None', 'MIT License', 'GNU GPLv3', 'Apache License 2.0', 'Boost Software License 1.0'],
  },
  {
    type: 'input',
    name: 'userGitHub',
    message: 'Please enter your GitHub details',
  },
  {
    type: 'input',
    name: 'userEmail',
    message: 'Please enter your email address for users to contact you with any questions',
  }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => generateMarkdown(answers)).then((markdown) => console.log(markdown)).catch((error) => {console.log(`something went wrong here: ${error}`)})
}

// function call to initialize program
init();
