const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')

module.exports = () => {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'clearConfirmation',
            message: "This action will delete all data inputted so far. Continue?",
            default: false
        })
        .then((answer) => {
            if (answer.clearConfirmation === false) {
                console.log('Clearing action aborted');
            } else {
                fs.writeFileSync(path.join(__dirname, '../db') + '/employees.json', '[]', 'utf-8');

            }
        })
}