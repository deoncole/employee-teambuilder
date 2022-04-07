// import/require the constructor classes to obtain the info that will develop the HTML page
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const createManager = managerObj => {
    return ` 
            <div class="card-body">
                <h5 class="card-title">${managerObj.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${managerObj.getRole()}</h6>
                <h6 class="card-subtitle mb-2 text-muted">ID#: ${managerObj.id}</h6>
                <p class="card-text">Office Number: ${managerObj.getOfficeNumber(managerObj.officeNumber)}</p>
                <a href="mailto:${managerObj.email}" class="card-link">${managerObj.email}</a>
            </div>
    `;
}

const createEngineer = engineerObj => {

}

module.exports = teamData => {
    
    // declare let variables to hold the different objects
    let managerData = {};
    let engineerData = {};
    let internData = {};
    }
    console.log(teamData.constructor.name);

    if (teamData.constructor.name === 'Manager'){
        managerData = teamData; 
    }

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Document Test</title>
    </head>

    <body>
        <div class="container-fluid bg-info text-center text-warning">
            <h1 class=>Team Builder</h1>
        </div>
        <div>
            <div id="mngr-section" class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mt-4" style="width: 18rem;">
                            ${createManager(managerData)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>

    `


}