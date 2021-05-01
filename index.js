// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const emailValidator = require('email-validator');
const urlValidator = require('url-validator');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title for this project?',
        validate: (value) => {
            if (value) { 
                return true 
            } else { 
                return 'A title is required... please enter the title for this project' 
            }
        },
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is your Github username? (Case sensitive)',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Your Github username is required... please enter your username'
            }
        },
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of this repoistory? (Case sensitive)',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Your repoistory name is required... please add your repo name'
            }
        },
    },
    {
        type: 'input',
        name: 'descr',
        message: 'Write a detailed description so your users can understand your project:',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'A description is required... please add a description to help your end users'
            }
        },
    },
    {
        type: 'input',
        name: 'features',
        message: 'Outline some features your project has:',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Atleast one feature is required... please add a feature for your project'
            }
        },
    },
    {
        type: 'input',
        name: 'image',
        message: 'Add a screenshot of your application (url format):',
        validate: (value) => {
            if (urlValidator(value)) { 
                return true 
            } else {
                return 'Please enter a valid link to image.... If you are unsure on how get an images url please watch this tutorial - (https://bit.ly/3vA7QDO)'
            }
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter how to install your application for your end users:',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Installation information is required... please add installation instructions'
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Usage information is required and helps users understand proper use... please add usage information'
            }
        },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed in creating this project?',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Contribution guidelines helps users understand who developed the project... please add contribution information'
            }
        },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can the end user test this project and what are the instructions?',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'Test information is required... please add test information'
            }
        },
    },
    {
        type: 'input',
        name: 'repolink',
        message: 'Please insert your repository link',
        validate: (value) => {
            if (urlValidator(value)) { 
                return true 
            } else {
                return 'Please enter in a valid link (full link including https://)'
            }
        },
    },
    {
        type: 'input',
        name: 'applink',
        message: 'Please insert your deployed applications/projects link',
        validate: (value) => {
            if (urlValidator(value)) { 
                return true 
            } else {
                return 'Please enter in a valid link (full link including https://)'
            }
        },
    },
    {
        type: 'input',
        name: 'license',
        message: 'Which license would you like to use for this project?',
        choices: ["MIT", "ISC", "GNU GPLv3"],
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'License help protect your work and is required... please choose a license'
            }
        },
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
