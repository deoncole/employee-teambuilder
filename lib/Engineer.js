// require the parent class
const Employee = require("./Employee");

// create a Engineer constructor object that will extend from the Employee class
class Engineer extends Employee {
    constructor(name, id, email, gitUserName){
        super(name, id, email);
        this.gitUserName = gitUserName;
    };

    getGitHub(gitUserName) {
        gitUserName = 'vgtahub';
        this.gitUserName = gitUserName;
        return this.gitUserName;
    };

    getRole() {
        return 'Engineer'
    };
}

module.exports = Engineer;