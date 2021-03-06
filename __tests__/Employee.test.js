// require the Employee js file for testing
const Employee = require('../lib/Employee');

// test to get the emplyoee's name
test("gets the employee's name", () => {
    const empName = new Employee().getName();
    const employee2 = new Employee('Vegeta', '1', 'dbz@email.com');
  
    expect(empName).toEqual(employee2.name);
  });

  // test to get the empployee's id
  test("gets the employee's ID", () => {
    const empId = new Employee().getId();
    const employee2 = new Employee('Vegeta', '1', 'dbz@email.com');
  
    expect(empId).toEqual(employee2.id);
    
  });

  // test to get the employee's email
  test("gets the employee's email", () => {
    const empEmail = new Employee().getEmail();
    const employee2 = new Employee('Vegeta', '1', 'dbz@email.com');
  
    expect(empEmail).toEqual(employee2.email);
  });

  // test to get the employee's role
  test("gets the employee's role", () => {
    const empRole = new Employee().getRole();
  
    expect(empRole).toEqual('Employee');
    
  });