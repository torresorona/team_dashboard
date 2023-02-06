const inquirer = require('inquirer');
const addTeamMember = require('./addTeamMemeber')
const generateHTML = require('./generateHTML')
const clearEmployees = require('./clearEmployees')

function nextAction() {
    inquirer
        .prompt({
            type: 'list',
            name: 'nextAction',
            message: 'Would you like to add another team member, remove all team members or generate your HTML?',
            choices: ['Add Team Member', 'Clear Team', 'Finish and generate HTML']

        })
        .then(async (answers) => {
            console.log(answers.nextAction);
            switch (answers.nextAction) {
                case 'Add Team Member':
                    await addTeamMember();
                    return 0;
                case 'Clear Team':
                    await clearEmployees();
                    return 0;
                case 'Finish and generate HTML':
                    await generateHTML();
                    return 0;
            }
            console.log("Next action completed");
        })
}

module.exports = nextAction;