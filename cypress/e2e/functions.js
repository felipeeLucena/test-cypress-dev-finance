
export function NewTransitionClick() {
    cy.get('#transaction > .button').click();
}

export function ProcessRegisterTransitionInput(description, amount, date) {
    NewTransitionClick();
    cy.get('[name=description]').type(description);
    cy.get('[name=amount]').type(amount);
    cy.get('[name=date]').type(date);
    cy.get('button').click();
}

export function ProcessRegisterTransitionOutput(description, amount, date) {
    NewTransitionClick();
    cy.get('[name=description]').type(description);
    cy.get('[name=amount]').type(amount);
    cy.get('[name=date]').type(date);
    cy.get('button').click();
}





