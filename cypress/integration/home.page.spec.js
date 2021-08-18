describe('koti', () => {
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  })

  it('shows title', () => {
    cy.contains('sandihoiva')
    cy.contains('Palvelulupauksemme')
  })

  it('Button click correct route, Lue lisaa', () => {
    cy.contains('Lue lisää').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/tietoa_meista')
    })

    cy.contains('Tietoa meistä')
  })
})