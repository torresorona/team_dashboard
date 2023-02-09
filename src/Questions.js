const questions = {
    questionsMember: [
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
        }
    
    ],

    questionsManager : [
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?"
        }
    ],

    questionsEngineer : [
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's GitHub username?"
        }
    ],

    questionsIntern: [
        {
            type: 'input',
            name: 'schoolName',
            message: "What is your intern's school name?"
        }
    ]
}

module.exports = questions