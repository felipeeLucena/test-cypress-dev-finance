
export function NewTransitionClick() {
    cy.get('#transaction > .button').click();
}

export function ProcessRegisterTransition() {
    NewTransitionClick()
    cy.get('[name=description]').type('Manutenção Site')
    cy.get('[name=amount]').type(300)
    cy.get('[name=date]').type('2023-06-02')
    cy.get('button').click()
    NewTransitionClick()
    cy.get('#description').type('Gastos com banco e dados')
    cy.get('#amount').type(-100)
    cy.get('#date').type('2023-06-10')
    cy.get('button').click()
}




