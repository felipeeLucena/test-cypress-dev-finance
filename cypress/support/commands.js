Cypress.Commands.add('ClickNewTransaction', (locator) => {
    cy.get(locator).click();
});

Cypress.Commands.add('ProcessRegisterTransitionInput', (description, amount, date) => {
    cy.get('[name=description]').type(description);
    cy.get('[name=amount]').type(amount);
    cy.get('[name=date]').type(date);
    cy.get('button').click();
})

Cypress.Commands.add('ProcessRegisterTransitionOutput', (description, amount, date) => {
    cy.get('[name=description]').type(description);
    cy.get('[name=amount]').type(amount);
    cy.get('[name=date]').type(date);
    cy.get('button').click();
})