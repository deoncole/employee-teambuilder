// function to create the manager HTML
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

// function to create the engineer cards by taking in the obect array
const createEngineer = engineerObjArr => {
    // conditional to check if the array is empty or not. If so return
    if (!engineerObjArr){
        return;
    }else {
        // use the map method to go through the array to get the name, id, email, and git user name. Place the data into the elements to create the card
        return`
            ${engineerObjArr
                .map(({name, id, email, gitUserName})=> {
                    return`
                        <div class="col">
                            <div class="card mt-4" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">ID#: ${id}</h6>
                                    <a href="mailto:${email}" class="card-link">${email}</a>
                                    <a href="https://github.com/${gitUserName}" target="_blank" class="card-link">${gitUserName}</a>
                                </div>
                            </div>
                        </div>
                    `;
                })
                .join('')}
        `;
    };
}

// function to create the engineer HTML. Use a for loop to loop through the created engineers
const createIntern = internObjArr => {
    // conditional to check if the array is empty or not. If so return
    if (!internObjArr){
        return;
    }else {
        // use the map method to go through the array to get the name, id, email, and school. Place the data into the elements to create the card
        return`
            ${internObjArr
                .map(({name, id, email, school})=> {
                    return`
                        <div class="col">
                            <div class="card mt-4" style="width: 18rem;">
                                <div class="card-body">
                                    <h5 class="card-title">${name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">ID# ${id}</h6>
                                    <h6 class="card-subtitle mb-2 text-muted">School: ${school}</h6>
                                    <a href="mailto:${email}" class="card-link">${email}</a>
                                </div>
                            </div>
                        </div>
                    `;
                })
                .join('')}
        `;
    };
}

module.exports = function (managerData, engineerData, internData) {
    // return the HTML
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Team Builder</title>
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
            <div id="eng-section" class="container">
                <div class="row">
                    ${createEngineer(engineerData)}
                </div>
            </div>
            <div id="intern-section" class="container">
                <div class="row">
                    ${createIntern(internData)}    
                </div>
            </div>
        </div>
    </body>

    `
}