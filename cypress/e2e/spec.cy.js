describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('should display the correct page title', () => {
    cy.visit('/')
    cy.contains('Kitchen Sink').should('be.visible')
  })
})