
describe('Cenário de Teste - Cadastro de Transações', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  it('Verificar se os campos do formulário NOVA TRANSAÇÃO estão visíveis', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('[name=description]').should('be.visible')
    cy.get('[name=amount]').should('be.visible')
    cy.get('[name=date]').should('be.visible')
  })

  it('Verificar se os botões do formulário NOVA TRANSAÇÃO estão visíveis', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('.button').should('be.visible')
    cy.get('.actions > .button').should('be.visible')
  })

  it('Verificar se o campo DESCRIÇÃO é do tipo TEXT', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('#description').should('have.attr', 'type', 'text');
  })

  it('Verificar se o campo AMOUNT é do tipo NUMBER', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('#amount').should('have.attr', 'type', 'number');
  })

  it('Verificar se o campo DATA é do tipo DATE', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('#date').should('have.attr', 'type', 'date');
  })

  it('Verificar o botão CANCELAR fecha modal', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('.actions > .button').click()
  })

  it('Verificar se os dados são cadastrados e o usuário é redirecionado para tela inicial', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.ProcessRegisterTransitionInput('Manutenção Site', 300, '2023-06-02')
    cy.url().should('eq', 'https://dev-finance.netlify.app/#', { timeout: 30000 });
    cy.get('#incomeDisplay').should('contain', 300)
  })

  it('Verificar se os dados de saída são cadastrados', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.ProcessRegisterTransitionOutput('Gastos com banco e dados', -100, '2023-06-10');
    cy.url().should('eq', 'https://dev-finance.netlify.app/#', { timeout: 30000 });
    cy.get('#expenseDisplay').should('contain', 100)
  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem enviar o campo DESCRIÇÃO e APARECER alert', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('#amount').type(-100)
    cy.get('#date').type('2023-06-02')
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })

  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem enviar o campo AMOUNT e aparecer ALERT', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('#description').type('Manutenção site')
    cy.get('#date').type('2023-06-02')
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })
  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem enviar o campo DATE e aparecer ALERT', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('#description').type('Manutenção site')
    cy.get('#amount').type(-100)
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })

  })

  it('Verificar se é possível SALVAR a TRANSAÇÃO sem preencher TODOS os CAMPOS e aparecer ALERT', () => {
    cy.ClickNewTransaction('#transaction > .button');
    cy.get('button').click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Por favor, preencha todos os campos corretamente')
    })

  })
})
