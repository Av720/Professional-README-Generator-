// TODO: Include packages needed for this application

const inquirer = require('inquirer');// inquirer package
const fs = require('fs')// fs package 
const generateMarkdown = require('./utils/generateMarkdown'); // generateMarkdown Package 
const util = require('util'); //util package 




    // TODO: Create an array of questions for user input
const questions = [

        //What is your github username?
        {
            type: 'Input',
            name: 'username',
            message: 'What is your Gihub Username?',

        },

        // What is yor email address?
        {
            type: 'Input',
            name: 'email',
            message: 'What is your email address?',

        },

        //What is your project's name? 
        {
            type: 'Input',
            name: 'title',
            message: 'What is the title of your project?',

        },

        // Write a short description of your project 
        {
            type: 'Input',
            name: 'description',
            message: 'Please enter a description of your project? ',

        },

        //What kind of license should your project have ?
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of license should your project have? ',
        choices: [{ value: 'Apache' },   //Apache 2.0 License
            { value: 'BSD3' },  //BSD 3-Clause License
    { value: 'LGPL' },  //GNU LGPL v3
    { value: 'MIT' },  //The MIT License
    { value: 'MPL' }, //Mozilla Public License 2.0
                { value: 'None' }, 
        ]
        },
    
        //What command should be run to install dependencies? 
        {
            type: 'Input',
            name: 'installation',
            message: 'How do you install your project?',
        },

        // What commmand should be run to run tests? 
        {
            type: 'Input',
            name: 'testing',
            message: 'How do you test this project?',
        },

        // what does the user need to know about using the repo? 
        {
            type: 'Input',
            name: 'usage',
            message: 'What does the user need to know about this project? ',
        },

        //What does the user need to know about contributing to the repo? 
        {
            type: 'Input',
            name: 'contribution',
            message: 'Do your have any contribution guidelines? ',
        },

    
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 

    fs.writeFile(fileName, data, (err) => {
        
        if (err)
            throw err;
        console.log("Sucess! The information was transfered to the README file!");
    })
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput);
            writeToFile("README.md", generateMarkdown(userInput));

    })

}

// Function call to initialize app
init();
