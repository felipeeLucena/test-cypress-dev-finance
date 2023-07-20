import { NewTransitionClick, ProcessRegisterTransitionInput, ProcessRegisterTransitionOutput } from "./functions";

describe('Cenário de Teste - Cadastro de Transações', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  it('Verificar se os campos do formulário NOVA TRANSAÇÃO estão visíveis', () => {
    NewTransitionClick()
    cy.get('[name=description]').should('be.visible')
    cy.get('[name=amount]').should('be.visible')
    cy.get('[name=date]').should('be.visible')
  })

  it('Verificar se os botões do formulário NOVA TRANSAÇÃO estão visíveis', () => {
    NewTransitionClick()
    cy.get('.button').should('be.visible')
    cy.get('.actions > .button').should('be.visible')
  })

  it('Verificar se o campo DESCRIÇÃO é do tipo TEXT', () => {
    NewTransitionClick()
    cy.get('#description').should('have.attr', 'type', 'text');
  })

  it('Verificar se o campo AMOUNT é do tipo NUMBER', () => {
    NewTransitionClick()
    cy.get('#amount').should('have.attr', 'type', 'number');
  })

  it('Verificar se o campo DATA é do tipo DATE', () => {
    NewTransitionClick()
    cy.get('#date').should('have.attr', 'type', 'date');
  })

  it('Verificar o botão CANCELAR fecha modal', () => {
    NewTransitionClick()
    cy.get('.actions > .button').click()
  })

  it('Verificar se os dados são cadastrados e o usuário é redirecionado para tela inicial', () => {
    ProcessRegisterTransitionInput('Manutenção Site', 300, '2023-06-02')
  })

  it('Verificar se os dados de saída são cadastrados', () => {
    ProcessRegisterTransitionOutput('Gastos com banco e dados', -100, '2023-06-10');
  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem enviar o campo DESCRIÇÃO e APARECER alert', () => {
    NewTransitionClick()
    cy.get('#amount').type(-100)
    cy.get('#date').type('2023-06-02')
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })

  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem enviar o campo AMOUNT e aparecer ALERT', () => {
    NewTransitionClick()
    cy.get('#description').type('Manutenção site')
    cy.get('#date').type('2023-06-02')
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })
  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem enviar o campo DATE e aparecer ALERT', () => {
    NewTransitionClick()
    cy.get('#description').type('Manutenção site')
    cy.get('#amount').type(-100)
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })

  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem preencher TODOS os CAMPOS e aparecer ALERT', () => {
    NewTransitionClick()
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })

  })
})
