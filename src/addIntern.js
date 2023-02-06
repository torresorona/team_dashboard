const fs = require('fs')
const path = require('path');


module.exports = (answers, internAnswers) => {
    let employeesJSON = fs.readFileSync(path.join(__dirname, '../db') + '/employees.json', 'utf-8');
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

    fs.writeFileSync(path.join(__dirname, '../db') + '/employees.json', employeesJSON, "utf-8");
}