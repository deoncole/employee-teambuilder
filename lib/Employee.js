// create a Employee constructor object that will be the super to the other classes
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // method that will get the Employee's name
    getName(name){
        name = 'Vegeta';
        this.name = name;
        return this.name;
    };

    // method that will get the Employee's id
    getId(id){
        id = '1';
        this.id = id;
        return this.id;
    };

    // method to get the Employee's email
    getEmail(email){
        email ='dbz@email.com';
        this.email = email;
        return this.email;
    };

    // method to return the Employee string
    getRole(){
        return 'Employee';
    };
}

module.exports = Employee