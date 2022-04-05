const Employee = require("./Employee");

// create a Manager constructor object that will extend from the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        // return {officeNumber: '123456790'};
        this.officeNumber = officeNumber;
    };

    getOfficeNumber(officeNumber) {
        officeNumber = '1234567890';
        this.officeNumber = officeNumber;
        return this.officeNumber;
    }

    // method to return the Manager string
    getRole() {
        // super.getRole();   
        return "Manager";
    };

}


module.exports = Manager;