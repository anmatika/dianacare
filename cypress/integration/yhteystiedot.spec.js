describe('Yhteystiedot route', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config('baseUrl')}/yhteystiedot`)
  })

  it('shows title', () => {
    cy.contains('Löydät meidät täältä')
  })
  it('shows address', () => {
    cy.contains('Itsenäisyydenkatu 1')
  })
  it('shows phone', () => {
    cy.contains('+358 1234567')
  })
  it('shows email', () => {
    cy.contains('info@sandihoiva.com')
  })
})