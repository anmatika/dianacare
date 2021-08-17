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

  it('Navigation goes correct route, koti', () => {
    cy.get('#navigation')
      .contains('Koti').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/')
    })

    cy.contains('Palvelulupauksemme')
  })

  it('Navigation goes correct route, tietoa meista', () => {
    cy.get('#navigation')
      .contains('Tietoa meistä').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/tietoa-meista')
    })

    cy.contains('Tietoa meistä')
  })

  it('Navigation goes correct route, yhteystiedot', () => {
    cy.get('#navigation')
      .contains('Ota yhteyttä').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/yhteystiedot')
    })

    cy.contains('Löydät meidät täältä')
  })
})