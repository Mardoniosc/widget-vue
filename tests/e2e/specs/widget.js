const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Widget', () => {
  it('Deve mostrar o botão de widget', () => {
    cy.visit(APP_URL)
    cy.wait(2000)
    cy.get('#widget-open-button')
  })

  it('Deve mostrar os botões de PROBLEMA, IDEIA, OUTROS', () => {
    cy.visit(APP_URL)
    cy.wait(2000)
    cy.get('#widget-open-button').click()
    cy.wait(1000)
    cy.get('#issue-button')
    cy.get('#idea-button')
    cy.get('#other-button')
  })

  it('Deve mostrar o campo para informar um problema', () => {
    cy.visit(APP_URL)
    cy.wait(2000)
    cy.get('#widget-open-button').click()
    cy.wait(1000)
    cy.get('#issue-button').click()
  })

  it('Deve enviar um feedback de problema', () => {
    cy.visit(APP_URL)
    cy.wait(2000)
    cy.get('#widget-open-button').click()
    cy.wait(1000)
    cy.get('#issue-button').click()
    cy.get('#text-area-feedback').type('Informando um problema qualquer')
    cy.wait(1000)
    cy.get('#button-submit-feedback').click()
    cy.wait(1500)
    cy.get('#icon-success')
  })
})
