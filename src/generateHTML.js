module.exports = (answers, managerAnswers) => {
    let managerName = answers.name;
    let managerID = answers.id;
    let managerEmail = answers.email;
    let managerOfficeNumber = managerAnswers.officeNumber

    let divCardEl = $('<div>').addClass("card");;
    let cardHeaderEl = $('<div>').addClass("card-header");
    let cardBodyEl = $('<div>').addClass("card-body");

    cardHeaderEl.append('<h2>').html(managerName);
    cardHeaderEl.append('<h3>').html('Manager');

    let bodyulEL = $('<ul>').addClass("list-group list-group-flush");
    bodyulEL.append('<li>').html(`ID: ${managerID}`).addClass('list-group-item');
    bodyulEL.append('<li>').html(`Email: ${managerEmail}`).addClass('list-group-item');
    bodyulEL.append('<li>').html(`Office Number: ${managerOfficeNumber}`).addClass('list-group-item');
    cardBodyEl.append(bodyulEL)

    divCardEl.append(cardHeaderEl, cardBodyEl);

    $('.card-deck').append(divCardEl);
}