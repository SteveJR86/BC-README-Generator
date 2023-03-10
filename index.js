const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'filename',
    message: 'Please enter a filename for your README file',
    default: 'README',
  },
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
    default: 'None'
  },
  {
    type: 'input',
    name: 'installInstr',
    message: 'Please enter any installation instructions for your project',
    default: 'None',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter any usage information for your project',
    default: 'None',
  },
  {
    type: 'input',
    name: 'contGuide',
    message: 'Please enter contribution guidelines for your project',
    default: 'None'
  },
  {
    type: 'input',
    name: 'testInstr',
    message: 'Please enter any test instructions for your project',
    default: 'None',
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
    default: 'None'
  },
  {
    type: 'input',
    name: 'userEmail',
    message: 'Please enter your email address for users to contact you with any questions',
    default: 'None'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if(error){
      console.error(`There has been a problem: ${error}`)
    } else {
      console.log('File written successfully!')
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    const { filename } = answers;
    console.log(filename);
    // console.log(details);
    const markdown = generateMarkdown(answers);
    return {'filename': filename, 'markdown': markdown}
  })
  .then((data) => writeToFile(`./READMEs/${data.filename}.md`, data.markdown))
  .catch((error) => {console.log(`something went wrong here: ${error}`)})
}

// function call to initialize program
init();
