
describe('Cenário de Teste - Tela INICIAL', () => {
    beforeEach(() => {
        cy.visit("/")
    });

    it('Verificar se o botão NOVA TRANSAÇÃO está visível', () => {
        cy.contains('Nova Transação').should('be.visible')
    })

    it('Verificar se ao clicar no botão NOVA TRANSAÇÃO abre o modal para cadastro de informações', () => {
        cy.ClickNewTransaction('#transaction > .button');
        cy.get('.modal').should('be.visible')
    })

    it('Verificar se VALORES de ENTRADA, SAÍDA e TOTAL estão sendo registrados correntamente', () => {
        cy.ClickNewTransaction('#transaction > .button');
        cy.ProcessRegisterTransitionInput('Manutenção Site', 300, '2023-06-02')
        cy.ClickNewTransaction('#transaction > .button');
        cy.ProcessRegisterTransitionOutput('Gastos com banco e dados', -100, '2023-06-10');
        cy.get('#incomeDisplay').should('contain', 300)
        cy.get('#expenseDisplay').should('contain', 100)
        cy.get('#totalDisplay').should('contain', 200)
    })

    it('Verificar se os dados estão sendo carregados corretamente após cadastrar transação', () => {
        cy.ClickNewTransaction('#transaction > .button');
        cy.ProcessRegisterTransitionInput('Manutenção Site', 300, '2023-06-02')
        cy.ClickNewTransaction('#transaction > .button');
        cy.ProcessRegisterTransitionOutput('Gastos com banco e dados', -100, '2023-06-10');
        cy.get('#data-table').should('contain', 300)
            .and('contain', 'Manutenção Site')
            .and('contain', '02/06/2023')
            .and('contain', 'Gastos com banco e dados')
            .and('contain', 100)
            .and('contain', '10/06/2023');
    });


})



