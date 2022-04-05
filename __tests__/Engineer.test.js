// require the Engineer js file for testing
const Engineer = require('../lib/Engineer');

// test to get the engineer's name
test("gets the engineer's name", () => {
    const engName = new Engineer().getName();
    const engineer2 = new Engineer('Vegeta', '1', 'dbz@email.com', 'vgtahub');
  
    expect(engName).toEqual(engineer2.name);
});

// test to get the engineer's id
test("gets the engineer's ID", () => {
    const engId = new Engineer().getId();
    const engineer2 = new Engineer('Vegeta', '1', 'dbz@email.com', 'vgtahub');
  
    expect(engId).toEqual(engineer2.id);
    
});

// test to get the engineer's email
test("gets the engineer's email", () => {
    const engEmail = new Engineer().getEmail();
    const engineer2 = new Engineer('Vegeta', '1', 'dbz@email.com');
  
    expect(engEmail).toEqual(engineer2.email);
});

// test to get the engineer's github
test("gets the engineer's github", () => {
    const engGitHub = new Engineer().getGitHub();
    const engineer2 = new Engineer('Vegeta', '1', 'dbz@email.com', 'vgtahub');
  
    expect(engGitHub).toEqual('vgtahub');
    
});

// test to get the engineer's role
test("gets the engineer's role", () => {
    const engRole = new Engineer().getRole();
  
    expect(engRole).toEqual('Engineer');
    
});