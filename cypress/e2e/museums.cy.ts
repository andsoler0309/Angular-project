describe('Museums list test', () => {
  it('Visits the museum list url', () => {
    cy.visit('/museums-list');
    cy.wait(2000);

    cy.contains('Listado de Museos');

    cy.get('div.col-md-3').should('have.length', 4);
  });

  it('get the detail of an museums', () => {
    cy.visit('/museums-list');
    cy.wait(5000);

    cy.get('div.col-md-3:first-of-type').click();
    cy.wait(5000);

    cy.get('p.card-text').should('exist');
    cy.get('div.col-md-3:first-of-type h2').then(($title) => {
      const title = $title.text();
      cy.log(title);
    });
  });
});
