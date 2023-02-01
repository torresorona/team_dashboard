const fs = require('fs')

module.exports = (answers, engineerAnswers) => {
    let employeesJSON = fs.readFileSync('../db/employees.js', 'utf-8');
    let employees = JSON.parse(employeesJSON);

    let engineer = {
        name: answers.first_name,
        position: 'Engineer',
        id: answers.id,
        email: answers.email,
        github: engineerAnswers.github
    }

    employees.push(engineer);

    employeesJSON = JSON.stringify(employees);

    fs.writeFileSync("../db/employees.json", employeesJSON, "utf-8");
}