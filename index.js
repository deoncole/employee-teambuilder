// create a constant that takes in the inquirer npm package and the other constants to require the necessary nodes
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

// let variable to hold the manager object
 let theManager = {};
 // let variables to be used as empty arrays to hold the team member objects
 let engTeam = [];
 let internTeam = [];

 //function to add team member or quit using a switch statement taking in the prompts and checking what the user chose
function addTeamMember(addMember){
    switch (addMember.next_to_add){
        case 'Engineer':
            engineerPrompt(engTeam)
            break;
        case 'Intern':
            internPrompt(internTeam)
            break;
        default:
            donePrompt()
            break;
    }
};


// create inquirer prompts for the team manager
const managerPrompt = () => {
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
            name: 'next_to_add',
            message: 'Add a team member.',
            choices: ['Engineer', 'Intern', "Done"],
        },
    ])
     // promise to take in the chosen field from the list. Create a new object and call the function to ask the user the for the next prompt
    .then((addMember) => {
        theManager = new Manager(addMember.name, addMember.id, addMember.email, addMember.number);
        addTeamMember(addMember);
    })
};

// prompts to add a Engineer
const engineerPrompt = engTeam => {
    console.log(`
    ==================
    Add a New Engineer
    ==================
  `);
    // conditional to check if an engineer has been added if not create an empty array
    if(!engTeam){
        engTeam = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name? (Required)",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    return "Please enter the Engineer's name"
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter a ID number for the Engineer (Required)",
            validate: validateId,  
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Engineers's email address (Required)",
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'github_username',
            message: "Enter the Engineer's GitHub user name (Required)",
            validate: gitInput => {
                if(gitInput){
                    return true;
                } else {
                    return "Please enter the Engineer's GitHub user name"
                }
            }
        },
        {
            type: 'list',
            name: 'next_to_add',
            message: 'Add a team member.',
            choices: ['Engineer', 'Intern', "Done"],
        },
    ])
     // promise to take in the chosen field from the list. Create a new object and push it into the array. call the function to ask the user the for the next prompt
    .then((addMember) => {
        const newEngineer = new Engineer(addMember.name, addMember.id, addMember.email, addMember.github_username);
        engTeam.push(newEngineer);
        addTeamMember(addMember);
    })
};

// prompts to add a Intern
const internPrompt = internTeam => {
    console.log(`
    =================
    Add a New Intern
    =================
  `);
    if(!internTeam){
        internTeam = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name? (Required)",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    return "Please enter the Intern's name"
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter a ID number for the Intern (Required)",
            validate: validateId,  
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Intern's email address (Required)",
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the Intern attend? (Required)",
            validate: schoolInput => {
                if(schoolInput){
                    return true;
                } else {
                    return "Please enter the Intern's school"
                }
            }
        },
        {
            type: 'list',
            name: 'next_to_add',
            message: 'Add a team member.',
            choices: ['Engineer', 'Intern', "Done"],
        },
    ])
    // promise to take in the chosen field from the list. Create a new object and push it into the array. call the function to ask the user the for the next prompt
    .then((addMember) => {
        const newIntern = new Intern(addMember.name, addMember.id, addMember.email, addMember.school);
        internTeam.push(newIntern);
        addTeamMember(addMember);
    });
}

// prompt when the user selects done
const donePrompt = () =>  {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmFinish',
            message: 'Are you finished building your team?',
            default: true
        }
    ])
    .then ((finished) => {
        // conditional to check if user is done. If so write the new file to the dist folder
        if(finished.confirmFinish){
            fs.writeFile('./dist/index.html', generatePage(theManager, engTeam, internTeam), err =>{
                if (err) throw new Error(err);
            })
            console.log("Page created, check out index.html in the dist directory to see it!")
        } else {
            // if the user is not done run the prompt to add a new team member
            chooseMemberPrompt();
        }
    })
}

// prompt to chose a member
const chooseMemberPrompt = () =>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'next_to_add',
            message: 'Add a team member.',
            choices: ['Engineer', 'Intern', "Done"],
        }
    ])
    .then((addMember) => {
        addTeamMember(addMember);
    });
}

// call the function to execute the prompts
managerPrompt();