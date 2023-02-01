const inquirer = require('inquirer');
const Rx = require('rxjs')
const prompts = new Rx.Subject();

// Helper Code
const addManager = require('./src/addManager')
const addEngineer = require('./src/addEngineer')
const addIntern = require('./src/addIntern')

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
        message: "What is your employee's id number?"
    },
    {
        type: 'list',
        name: 'position',
        message: "What is your employee's postion?",
        list: ['Manager', 'Engineer', 'Intern']
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

function addTeamMember() {
    inquirer.prompt(prompts);
    console.log(prompts);
    // try {
    // inquirer.prompt(prompts);
    // prompts.next(questionsEmployee).ui.process.subscribe(({ answers }) => {
    //     switch (answers.position) {
    //         case 'Manager':
    //             prompts.next(questionsManager)
    //                 .then((answersManager) => {
    //                     // call helper function to generate HTML with answers and answersManager
    //                     addManager(answers, answersManager);
    //                 });
    //             prompts.complete();
    //             break;
    //     }
    // });
    //     //         case 'Engineer':
    //     //             prompts.next(questionsEngineer)
    //     //                 .then((answersEngineer) => {
    //     //                     // call helper function to generate HTML with answers and answersEngineer
    //     //                     addEngineer(answers, answersEngineer);
    //     //                 });
    //     //             prompts.complete();
    //     //             break;
    //     //         case 'Intern':
    //     //             prompts.next(questionsIntern)
    //     //                 .then((answersIntern) => {
    //     //                     // call helper function to generate HTML with answers and answersIntern
    //     //                     addIntern(answers, answersIntern);
    //     //                 });
    //     //             prompts.complete();
    //     //             break;
    //     //     }
    //     // }
    //     // )
    // }
    // catch(err) {
    //     console.log(eer);
    // }
}

addTeamMember();