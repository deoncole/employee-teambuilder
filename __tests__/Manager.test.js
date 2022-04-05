// require the Manager js file for testing
const Manager = require('../lib/Manager');

test("get's the Manager's name", () => {
    const managerName = new Manager().getName;
    const manager2 = new Manager('Vegeta', '1', 'dbz@email.com','1234567890');

    expect(managerName).toEqual(manager2.name);

});

test("get's the Manager's ID", () => {
    const managerId = new Manager().getId;
    const manager2 = new Manager('Vegeta', '1', 'dbz@email.com','1234567890');

    expect(managerId).toEqual(manager2.id);

});

test("get's the Manager's email", () => {
    const managerEmail = new Manager().getEmail;
    const manager2 = new Manager('Vegeta', '1', 'dbz@email.com','1234567890');

    expect(managerEmail).toEqual(manager2.id);

});

test("get's the Manager's office number", () => {
    const managerNumber = new Manager() ;
    const manager2 = new Manager('Vegeta', '1', 'dbz@email.com','1234567890');

    expect(managerNumber.officeNumber).toEqual(manager2.officeNumber);

});

test("gets the Manager's role", () => {
    const managerRole = new Manager().getRole();
    // expect(managerRole).toEqual('Manager');
    
});