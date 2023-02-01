const fs = require('fs')

module.exports = (answers, managerAnswers) => {
    let employeesJSON = fs.readFileSync('../db/employees.js', 'utf-8');
    let employees = JSON.parse(employeesJSON);

    let manager = {
        name: answers.first_name,
        position: 'Manager',
        id: answers.id,
        email: answers.email,
        officeNumber: managerAnswers.officeNumber
    }

    employees.push(manager);

    employeesJSON = JSON.stringify(employees);

    fs.writeFileSync("../db/employees.json", employeesJSON, "utf-8");
}