/// <reference types="cypress" />


describe('Cadastro de Motorista', () => {
  beforeEach(() => {
   
    cy.visit('./src/index.html')
  })

  it('verificar título da aplicação', () => {
  
    cy.title().should('be.equal', 'CADASTRO DE MOTORISTAS')

  })

  it('abrir o campo de cadastro', () => {

    cy.contains('button', 'CADASTRAR NOVO MOTORISTA').click()
    cy.get('.modal-content').should('be.visible')
    
  })

  it('verificar opções de visualizações de registros', () => {

    cy.get('label > .custom-select').select('10').should('be.visible')
    cy.get('label > .custom-select').select('25').should('be.visible')
    cy.get('label > .custom-select').select('50').should('be.visible')
    cy.get('label > .custom-select').select('100').should('be.visible')

  })

  it('buscar motorista cadastrado no campo de procurar', () => {

    cy.get('#tabelaMotoristas_filter').type('Thor')
    cy.get('#tabelaMotoristas_info').contains('Mostrando de 1 até 1').should('be.visible')

  })

  it.only('cadastrar motorista successfully', () => {

    cy.cadastro()
    cy.get('#tabelaMotoristas_filter').type(Cypress.env('cpf'))
    cy.get('#tabelaMotoristas_info').contains('Mostrando de 1 até 1').should('be.visible')
    
  })

  it('verificar botão de atualizar registro', () => {

    cy.get(':nth-child(1) > :nth-child(8) > .btnEditar > img').click()
    cy.get('.modal-content').should('be.visible')

  })

})
