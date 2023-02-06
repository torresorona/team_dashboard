const inquirer = require('inquirer');

const addManager = require('./addManager')
const addEngineer = require('./addEngineer')
const addIntern = require('./addIntern');

const questionsEmployee = [
    {
        type: 'input',
        name: 'first_name',
        message: "What is your employee's fist name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your employee's id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your employee's email?"
    },
    {
        type: 'list',
        name: 'position',
        message: "What is your employee's postion?",
        choices: ['Manager', 'Engineer', 'Intern']
    }

]

const questionsManager = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your manager's office number?"
    }
]

const questionsEngineer = [
    {
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username?"
    }
]

const questionsIntern = [
    {
        type: 'input',
        name: 'schoolName',
        message: "What is your intern's school name?"
    }
]

module.exports = () => {
    try {
        inquirer
            .prompt(questionsEmployee)
            .then((answers) => {
                console.log(answers.position)
                switch (answers.position) {
                    case 'Manager':
                        inquirer
                            .prompt(questionsManager)
                            .then((answersManager) => {
                                // call helper function to generate HTML with answers and answersManager
                                addManager(answers, answersManager);
                            });
                        return 0;
                    case 'Engineer':
                        inquirer
                            .prompt(questionsEngineer)
                            .then((answersEngineer) => {
                                // call helper function to generate HTML with answers and answersEngineer
                                addEngineer(answers, answersEngineer);
                            });
                        return 0;
                    case 'Intern':
                        inquirer
                            .prompt(questionsIntern)
                            .then((answersIntern) => {
                                // call helper function to generate HTML with answers and answersIntern
                                addIntern(answers, answersIntern);
                            });
                        return 0;
                }

            })
    }
    catch (err) {
        console.log(eer);
    }
}