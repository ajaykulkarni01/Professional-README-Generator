// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateREADME = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'project',
        message: `What is your project's name?`,
    },
    {
        type: 'input',
        name: 'description',
        message: `Please write a short description of your project:`,
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'dependencies',
        message: `What command should be run to install dependencies?`,
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: `What command should be run to run tests?`,
        default: 'npm tests'
    },
    {
        type: 'input',
        name: 'usage',
        message: `What does the user need to know about using the repo?`,
    },
    {
        type: 'input',
        name: 'contact',
        message: `What does the user need to know about contributing to the repo?`,
    },
];
inquirer
.prompt(questions)
.then(function(data){
 

console.log(data);
// console.log(${licenseImg});

fs.writeFile("./output/README.md", generateREADME(data), function(err){
    if (err){
        console.log("Error reported!!!")
        throw err;
        
      };
      console.log("README has been generated!")
  });




})
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
