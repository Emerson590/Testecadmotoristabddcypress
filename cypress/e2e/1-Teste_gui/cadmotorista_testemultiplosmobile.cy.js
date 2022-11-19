/// <reference types="cypress" />

const sizes = ['iphone-6', 'ipad-2', 'iphone-7','iphone-8','iphone-x',
              'iphone-xr','iphone-se2','samsung-note9','samsung-s10',[1024, 768,"display"]]

describe('Verificar título da aplicação em múltiplos viewports', () => {
  sizes.forEach((size) => {
   
    it(`viewports ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)

      }

        cy.visit('./src/index.html')
        cy.title().should('be.equal', 'CADASTRO DE MOTORISTAS')
    
    
      
    })
  })
})

describe('Abrir o campo de cadastro em múltiplos viewports', () => {
  sizes.forEach((size) => {
   
    it(`viewports ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)

      }

        cy.visit('./src/index.html')
        cy.contains('button', 'CADASTRAR NOVO MOTORISTA').click()
        cy.get('.modal-content').should('be.visible')
    
    
      
    })
  })
})

describe('Verificar opções de visualizações de registros em múltiplos viewports', () => {
  sizes.forEach((size) => {
   
    it(`viewports ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)

      }

        cy.visit('./src/index.html')
        cy.get('label > .custom-select').select('10').should('be.visible')
        cy.get('label > .custom-select').select('25').should('be.visible')
        cy.get('label > .custom-select').select('50').should('be.visible')
        cy.get('label > .custom-select').select('100').should('be.visible')
    
    
      
    })
  })
})

describe('Buscar motorista cadastrado no campo de procurar em múltiplos viewports', () => {
  sizes.forEach((size) => {
   
    it(`viewports ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)

      }

        cy.visit('./src/index.html')
        cy.get('#tabelaMotoristas_filter').type('Thor')
        cy.get('#tabelaMotoristas_info').contains('Mostrando de 1 até 1').should('be.visible')
    
    
      
    })
  })
})

describe('Cadastrar motorista successfully em múltiplos viewports', () => {
  sizes.forEach((size) => {
   
    it.only(`viewports ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)

      }

        cy.cadastro()
        cy.get('#tabelaMotoristas_filter').type(Cypress.env('cpf'))
        cy.get('#tabelaMotoristas_info').contains('Mostrando de 1 até 1').should('be.visible')
    
    
      
    })
  })
})

describe('Verificar botão de atualizar registro em múltiplos viewports', () => {
  sizes.forEach((size) => {
   
    it(`viewports ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)

      }

        cy.visit('./src/index.html')  
        cy.get(':nth-child(1) > :nth-child(8) > .btnEditar > img').click()
        cy.get('.modal-content').should('be.visible')
    
    
      
    })
  })
})
  
