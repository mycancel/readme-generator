// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is your project\'s usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can users install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Who contributed to your project?',
        name: 'contribution',
    },
    {
        type: 'rawlist',
        message: 'What license should be applied?',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
        ],
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        // console.log(answers);
        console.log('Markdown is Generating...')
        generateMarkdown(answers);
    });
}

// Function call to initialize app
init();
