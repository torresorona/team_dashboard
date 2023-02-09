const inquirer = require('inquirer');
const Questions = require('./Questions')
const Manager = require('../lib/manager')


class Dashboard {
    constructor() {
        this.team_members = 0;
    }

    init() {
        console.log("Let's first add a Manager");
        this.nextTeamMember("Manager");
    }

    nextTeamMember(position) {
        if (position == null) {
            this.askForPosition().then(val => {
                let position = val;
                console.log("Position Set: " + position)
                this.captureMemberDeatils(position);
            })
        } else {
            console.log("Position Passed: " + position);
            this.captureMemberDeatils(position);
        };
    }

    captureMemberDeatils(position) {
        inquirer
            .prompt(Questions.questionsMember)
            .then(val => this.createTeamMember(position, val))
    }

    createTeamMember(position, memberDetails) {
        switch (position) {
            case "Manager":
                inquirer
                    .prompt(Questions.questionsManager)
                    .then(val => {
                        console.log(val);
                        this.newTeamMember = new Manager(memberDetails.first_name, memberDetails.id, memberDetails.email, val.officeNumber);
                        console.log(this.newTeamMember);
                        this.saveTeamMember(this.newTeamMember);
                    })
                break;
            case "Engineer":
                inquirer
                    .prompt(Questions.questionsEngineer)
                    .then(val => {
                        this.newTeamMember = new Engineer(memberDetails.first_name, memberDetails.id, memberDetails.email, val.github);
                        this.saveTeamMember(this.newTeamMember);
                    })
                break;
            case "Intern":
                inquirer
                    .prompt(Questions.questionsIntern)
                    .then(val => {
                        this.newTeamMember = new Intern(memberDetails.first_name, memberDetails.id, memberDetails.email, val.schoolName);
                        this.saveTeamMember(this.newTeamMember);
                    })
                break;
            default:
                break;
        }
    }

    saveTeamMember(member) {
        
    }

    askForPosition() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'position',
                    message: "What is your team member's position?",
                    choices: ['Manager', 'Engineer', 'Intern']
                }
            ])
            .then(val => {
                return val.position;
            })
    }

    clear() {
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


}

module.exports = Dashboard;