const Member = require('./member');

class Engineer extends Member {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;

// const fs = require('fs');
// const path = require('path');

// module.exports = (answers, engineerAnswers) => {
//     let employeesJSON = fs.readFileSync(path.join(__dirname, '../db') + '/employees.json', 'utf-8');
//     let employees = JSON.parse(employeesJSON);

//     let engineer = {
//         name: answers.first_name,
//         position: 'Engineer',
//         id: answers.id,
//         email: answers.email,
//         github: engineerAnswers.github
//     }

//     employees.push(engineer);

//     employeesJSON = JSON.stringify(employees);

//     fs.writeFileSync(path.join(__dirname, '../db') + '/employees.json', employeesJSON, "utf-8");
// }