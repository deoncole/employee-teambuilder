// require the Intern js file for testing
const Intern = require('../lib/Intern');

// test to get the intern's name
test("gets the intern's name", () => {
    const internName = new Intern().getName();
    const intern2 = new Intern('Vegeta', '1', 'dbz@email.com', 'capsule high');
  
    expect(internName).toEqual(intern2.name);
});

// test to get the intern's id
test("gets the intern's ID", () => {
    const internId = new Intern().getId();
    const intern2 = new Intern('Vegeta', '1', 'dbz@email.com', 'capsule high');
  
    expect(internId).toEqual(intern2.id);
    
});

// test to get the intern's email
test("gets the intern's email", () => {
    const internEmail = new Intern().getEmail();
    const intern2 = new Intern('Vegeta', '1', 'dbz@email.com', 'capsule high');
  
    expect(internEmail).toEqual(intern2.email);
});

// test to get the intern's school
test("gets the intern's school", () => {
    const internSchool = new Intern().getSchool();
    const intern2 = new Intern('Vegeta', '1', 'dbz@email.com', 'capsule high');
  
    expect(internSchool).toEqual(intern2.school);
});

// test to get the intern's role
test("gets the intern's role", () => {
    const internRole = new Intern().getRole();
  
    expect(internRole).toEqual('Intern');
    
});