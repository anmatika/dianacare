describe('koti', () => {
  beforeEach(() => {
    cy.visit('https://dianacare.netlify.app')
  })

  it('shows title', () => {
    cy.contains('sandihoiva')
    cy.contains('Palvelulupauksemme')
  })
})