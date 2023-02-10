const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Questions = require('./Questions');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern')
const generateDashboard = ('./generateDashboard');


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
        let employeesJSON = fs.readFileSync(path.join(__dirname, '../db') + '/employees.json', 'utf-8');
        let employees = JSON.parse(employeesJSON);

        employees.push(member);

        employeesJSON = JSON.stringify(employees);

        fs.writeFileSync(path.join(__dirname, '../db') + '/employees.json', employeesJSON, "utf-8");

        this.nextAction();
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

    nextAction() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'nextAction',
                    message: "What will you like to do next?",
                    choices: ['Add Team Member', 'Generate Dashboard', 'Clear all Team Members']
                }
            ])
            .then((answer) => {
                if (answer.nextAction === 'Add Team Member') {
                    this.nextTeamMember();
                } else if (answer.nextAction === 'Generate Dashboard') {
                    console.log("Dashboard index.html has been generated");
                } else {
                    this.clear();
                }
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
                    this.nextAction();
                } else {
                    fs.writeFileSync(path.join(__dirname, '../db') + '/employees.json', '[]', 'utf-8');

                }
            })
    }


}

module.exports = Dashboard;