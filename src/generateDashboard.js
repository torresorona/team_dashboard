const employeesDB = require('../db/employees.json')

const fs = require('fs');
const path = require('path');

function html(generatedHTML) { 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>

<body>
    <header>
        <h1 class="text-center bg-danger py-4 text-white bg-opacity-75">My Team</h1>
    </header>
    <div id="employee-cards" class="card-deck">
        ${generatedHTML}
    </div>

</body>

</html>
`
}

module.exports = () => {
    let employeesJSON = fs.readFileSync(path.join(__dirname, '../db') + '/employees.json', 'utf-8');
    let employees = JSON.parse(employeesJSON);

    // console.log(employees);
    employees.forEach(employee => {
        switch (employee.position) {
            case 'Manager':
                
                break;
                
            case 'Engineer':
                
                break;

            case 'Intern':
                
                break;
        
            default:
                break;
        }
    });


}







// module.exports = () => {
//     let managerName = answers.name;
//     let managerID = answers.id;
//     let managerEmail = answers.email;
//     let managerOfficeNumber = managerAnswers.officeNumber

//     let divCardEl = $('<div>').addClass("card");;
//     let cardHeaderEl = $('<div>').addClass("card-header");
//     let cardBodyEl = $('<div>').addClass("card-body");

//     cardHeaderEl.append('<h2>').html(managerName);
//     cardHeaderEl.append('<h3>').html('Manager');

//     let bodyulEL = $('<ul>').addClass("list-group list-group-flush");
//     bodyulEL.append('<li>').html(`ID: ${managerID}`).addClass('list-group-item');
//     bodyulEL.append('<li>').html(`Email: ${managerEmail}`).addClass('list-group-item');
//     bodyulEL.append('<li>').html(`Office Number: ${managerOfficeNumber}`).addClass('list-group-item');
//     cardBodyEl.append(bodyulEL)

//     divCardEl.append(cardHeaderEl, cardBodyEl);

//     $('.card-deck').append(divCardEl);
// }