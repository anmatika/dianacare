describe('Tietoa meista route', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config('baseUrl')}/tietoa_meista`)
  })

  it('shows title', () => {
    cy.contains('Tietoa meistä')
  })
})