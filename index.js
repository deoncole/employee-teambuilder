// create a constant that takes in the inquirer npm package
const inquirer = require('inquirer');
const manager = require('./lib/Manager');

// function to validate the employee's id number in the prompt
function validateId(idInput){
   var idNum = /^\d+$/;
   return idNum.test(idInput) || "Please enter a valid ID a number!";
};

// function to validate the office number in the prompt
function validateEmail(emailInput){
    const validEmailInput = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
        if (validEmailInput){
            return true;
        } else {
            return "Please enter a vaild email address";
        }
 };

 // function to validate the office number in the prompt
function validateOffNumber(offNumInput){
    const correctNumInput = offNumInput.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
    if (correctNumInput) {
        return true;
    } else {
        return "Please enter a valid phone number";
    }
 };

// create inquirer prompts for the user
const teamPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Team Manager's name? (Required)",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    return "Please enter the team manager's name"
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter a ID number for the Team Manager (Required)",
            validate: validateId,  
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Team Manager's email address (Required)",
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'number',
            message: "Enter the Team Manager's office number. (Required)",
            validate: validateOffNumber
        },
        {
            type: 'list',
            name: 'team_list',
            message: 'Add a team member.',
            choices: ['Engineer', 'Intern', "Done"],
        },
    ])
    .then((addMember) => {
        switch (addMember.team_list){
            case 'Engineer':
                break;
            case 'Intern':
                console.log('you picked Intern')
                break;
            default:
                console.log('you are Done')
                break;
        }
    })
};

teamPrompt();