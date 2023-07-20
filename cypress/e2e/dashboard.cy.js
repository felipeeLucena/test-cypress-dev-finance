import { NewTransitionClick } from "../functions/dashboard";
import { ProcessRegisterTransition } from "../functions/dashboard";

describe('Cenário de Teste - Tela INICIAL', () => {
    beforeEach(() => {
        cy.visit("https://dev-finance.netlify.app/")
    });

    it('Verificar se o botão NOVA TRANSAÇÃO está visível', () => {
        cy.contains('Nova Transação').should('be.visible')
    })

    it('Verificar se ao clicar no botão NOVA TRANSAÇÃO abre o modal para cadastro de informações', () => {
        NewTransitionClick()
        cy.get('.modal').should('be.visible')
    })

    it('Verificar se VALORES de ENTRADA, SAÍDA e TOTAL estão sendo registrados correntamente', () => {
        ProcessRegisterTransition()
        cy.get('#incomeDisplay').should('contain', 300)
        cy.get('#expenseDisplay').should('contain', 100)
        cy.get('#totalDisplay').should('contain', 200)
    })

    it('Verificar se os dados estão sendo carregados corretamente após cadastrar transação', () => {
        ProcessRegisterTransition()
        cy.get('#data-table')
            .should('contain', 300)
            .should('contain', 'Manutenção Site')
            .should('contain', '02/06/2023')
            .should('contain', 'Gastos com banco e dados')
            .should('contain', 100)
            .should('contain', '10/06/2023')
    })


})



