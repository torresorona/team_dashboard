const nextAction = require('./src/nextAction');

async function init() {
    let terminate = 0;
    while (terminate === 0) {
        terminate = await nextAction();
    }
}

init();