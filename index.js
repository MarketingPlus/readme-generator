// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const emailValidator = require('email-validator');

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
        name: 'github',
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
        name: 'description',
        message: 'Write a detailed description so your users can understand your project',
        validate: (value) => {
            if (value) { 
                return true 
            } else {
                return 'A description is required... please add a description to help your end users'
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
