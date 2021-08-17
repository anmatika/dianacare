describe('navigation', () => {
  beforeEach(() => {
    cy.visit('https://dianacare.netlify.app')
  })

  it('Has navigation links', () => {
    cy.get('#navigation')
      .contains('Koti')
    cy.get('#navigation')
      .contains('Tietoa meistä')
    cy.get('#navigation')
      .contains('Ota yhteyttä')
  })
})