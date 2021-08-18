describe('Footer', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })

  it('shows yhteystiedot', () => {
    cy.scrollTo('bottom')
    cy.get('#footer').contains('Yhteystiedot')
  })

  it('Yhteystiedot goes to correct route', () => {
    cy.get('#footer').contains('Yhteystiedot').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/yhteystiedot')
    })

    cy.contains('Löydät meidät täältä')
  })
})