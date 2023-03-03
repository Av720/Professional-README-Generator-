// TODO: Include packages needed for this application

const inquirer = require('inquirer');// inquirer package
const fs = require('fs')// fs package 
const generateMarkdown = require('./utils/generateMarkdown'); // generateMarkdown Package 
const util = require('util'); //util package 

// TODO: Create an array of questions for user input
inquirer.prompt = ([

    //What is your github username?
    {
        type: 'Input',
        name: 'title',
        message: 'What is the current title of your Repository?',

    },

    // What is yor email address?
    {
        type: '',
        name: '',
        message: '',

    },

    //What is your project's name? 
    {
        type: '',
        name: '',
        message: '',

    },

    // Write a short description of your project 
    {
        type: '',
        name: '',
        message: '',

    },

    //What kind of license should your project have ?
    {
        type: '',
        name: '',
        message: '',

    },

    //What command should be run to install dependencies? 
    {
        type: '',
        name: '',
        message: '',
    },

    // What commmand should be run to run tests? 
    {
        type: '',
        name: '',
        message: '',
    },

    // what does the user need to know about using the repo? 
    {
        type: '',
        name: '',
        message: '',
    },

    //What does the user need to know about contributing to the repo? 
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
