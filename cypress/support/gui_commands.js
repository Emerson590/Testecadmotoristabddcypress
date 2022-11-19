/// <reference types="Cypress" />

Cypress.Commands.add('cadastro', () => {
    cy.visit('./src/index.html')
  
    cy.contains('button', 'CADASTRAR NOVO MOTORISTA').click()
    cy.get('[id^=nome]').type(Cypress.env('nome'))
    cy.get('[id^=telefone]').type(Cypress.env('telefone'))
    cy.get('[id^=dataNascimento]').type(Cypress.env('data'))
    cy.get('#cnh').type(Cypress.env('cnh'))
    cy.get('[id^=cnhTipo]').type(Cypress.env('tipo de cnh'))
    cy.get('[id^=cpf]').type(Cypress.env('cpf'))
    cy.get('#situacao').select(Cypress.env('situação'))
    cy.get('#botaoSalvar').click()


    

  })
