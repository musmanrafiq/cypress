describe('Home page of www.usmanrafiq.com', () => {
  beforeEach(() => {
     cy.visit('https://www.usmanrafiq.com')
  })

  it('website has heading available', () => {
    cy.get('h1').first().should('have.text', '\nM.Usman Rafiq | Programming Escapades\n')
  });

  it('website has sub-heading available', () => {
    cy.get('p').first().should('have.text', 'Things I have learned, experienced and explored')
  });

  it('website has menu items', () => {
    cy.get('div.PageList > div > ul > li:nth-child(1) > a').contains('Home')

    //.should('have.attr', 'href').and('include', 'contact')

  });
});