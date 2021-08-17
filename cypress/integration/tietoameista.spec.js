describe('Tietoa meista route', () => {
  beforeEach(() => {
    cy.visit('https://dianacare.netlify.app/tietoa-meista')
  })

  it('shows title', () => {
    cy.contains('Tietoa meistä')
  })
})