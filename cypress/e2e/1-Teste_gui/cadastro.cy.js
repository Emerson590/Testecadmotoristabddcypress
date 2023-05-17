/// <reference types="cypress" />

/* webcadastro.cy.js
 *
 * Feature: Formulário de cadastro
 *   Como um usuário
 *   Quero cadastrar um motorista
 *   Para fazer gestão da frota 
 */
      
 describe('Cadastrar motorista com sucesso', () => {
    context('Dado que o usuário acesse o sistema cadmotorista', () => {
      beforeEach(() => {
        cy.visit('./src/index.html')
      })

      context('Quando efetuar o cadastro do motorista', () => {
        beforeEach(() => {
          cy.cadastro()
        })
                      
        it('Então o sistema deve conter o motorista cadastrado', () => {
          cy.get('#tabelaMotoristas_filter').type(Cypress.env('cpf'))
          cy.get('#tabelaMotoristas_info').contains('Mostrando de 1 até 1').should('be.visible')
                        
        })
              
      })
                    
    })

  })


        
                            

          
    
  

 

  


