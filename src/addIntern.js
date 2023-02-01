const fs = require('fs')

module.exports = (answers, internAnswers) => {
    let employeesJSON = fs.readFileSync('../db/employees.js', 'utf-8');
    let employees = JSON.parse(employeesJSON);

    let intern = {
        name: answers.first_name,
        position: 'Intern',
        id: answers.id,
        email: answers.email,
        school: internAnswers.school
    }

    employees.push(intern);

    employeesJSON = JSON.stringify(employees);

    fs.writeFileSync("../db/employees.json", employeesJSON, "utf-8");
}