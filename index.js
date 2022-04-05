// create a constant that takes in the inquirer npm package
const inquirer = require('inquirer');
const manager = require('./lib/Manager');

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
                    console.log("Please enter the team manager's name")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Enter a ID number for the Team Manager (Required)",
            validate: idInput => {
                if(idInput){
                    return true;
                } else {
                    console.log('Please enter a ID number for the Team Manager');
                    return false
                }
            }    
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Team Manager's email address (Required).",
            validate: emailInput => {
                const validEmailInput = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput);
                if (validEmailInput){
                    return true;
                } else {
                    console.log(" --- Please enter a vaild email address");
                    return false;
                }
            }   
        },
        {
            type: 'input',
            name: 'number',
            message: "Enter the Team Manager's office number. (Required)",
            validate: function(numberInput) {
                const correctNumInput = numberInput.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
                if (correctNumInput) {
                    return true;
                } else {
                    console.log(" --- Please enter a valid phone number");
                }
            }   
        }
    ]);
};

teamPrompt();