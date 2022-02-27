describe('Home page of www.usmanrafiq.com', () => {
  beforeEach(() => {
     cy.visit('https://www.usmanrafiq.com')
  })

  it('displays two todo items by default', () => {
    cy.get('h1').first().should('have.text', '\nM.Usman Rafiq | Programming Escapades\n')
  });

});