const Member = require('./member');

class Manager extends Member {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;

// const fs = require('fs')
// const path = require('path');

// module.exports = (answers, managerAnswers) => {
//     let employeesJSON = fs.readFileSync(path.join(__dirname, '../db') + '/employees.json', 'utf-8');
//     let employees = JSON.parse(employeesJSON);

//     let manager = {
//         name: answers.first_name,
//         position: 'Manager',
//         id: answers.id,
//         email: answers.email,
//         officeNumber: managerAnswers.officeNumber
//     }

//     employees.push(manager);

//     employeesJSON = JSON.stringify(employees);

//     fs.writeFileSync(path.join(__dirname, '../db') + '/employees.json', employeesJSON, "utf-8");
// }