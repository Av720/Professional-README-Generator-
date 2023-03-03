// TODO: Include packages needed for this application

const inquirer = require('inquirer');// inquirer package
const fs = require('fs')// fs package 
const generateMarkdown = require('./utils/generateMarkdown'); // generateMarkdown Package 
const util = require('util'); //util package 

// TODO: Create an array of questions for user input
inquirer.prompt = ([
    {
        type: 'Input',
        name: 'title',
        message: 'What is the current title of your Repository?',

    },
    {
        type: '',
        name: '',
        message: '',

    },
    {
        type: '',
        name: '',
        message: '',

    },
    {
        type: '',
        name: '',
        message: '',

    },
    {
        type: '',
        name: '',
        message: '',

    },
    {
        type: '',
        name: '',
        message: '',
    },

    {
        type: '',
        name: '',
        message: '',
    },

    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },

    //     //create a validation if and else for user input 
    //     validate: nameEntry => {
    //     if (nameEntry) {
    //         return true;
    //     } else {
    //         console.log('A repository title is required ');
    //         return false
    //     }
    // }

]);


console.log(inquirer);
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
