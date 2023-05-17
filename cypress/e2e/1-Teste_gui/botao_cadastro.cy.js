/// <reference types="cypress" />

/* webcadastro.cy.js
 *
 * Feature: Botão de cadastro
 *   Como um usuário 
 *   Quero abrir o campo de cadastro
 *   Para ter acesso ao formulário de cadastramento
 */

    
    
 describe('Botão de cadastro', () => {
    context('Dado que o usuário acesse o sistema cadmotorista', () => {
      beforeEach(() => {
        cy.visit('./src/index.html')
      })

      context('Quando clicar no botão de cadastro', () => {
        beforeEach(() => {
            cy.contains('button', 'CADASTRAR NOVO MOTORISTA').click()  
        })

        it('Então deve ter acesso ao formulário de cadastramento', () => {
            cy.get('.modal-content').should('be.visible')
        })
      })

    })

})


 