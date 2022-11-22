describe('Artwork list test', () => {
  it('Visits the artwork list url', () => {
    cy.visit('/artworks/list');
    cy.wait(1000);

    cy.contains('Artworks');

    cy.get('div.col-md-3').should('have.length', 4);
  });

  it('get the detail of an artwork', () => {
    cy.visit('/artworks/list');
    cy.wait(1000);

    cy.get('div.col-md-3:first-of-type').click();
    cy.wait(1000);

    cy.get('p.card-text').should('exist');
    cy.get('div.col-md-3:first-of-type h2').then(($title) => {
      const title = $title.text();
      cy.log(title);
      cy.get('h1.card-title').should('contain', title);
    });
  });

  it('should create an artwork', () => {
    cy.visit('/artworks/create');
    cy.wait(1000);

    cy.get('input[id="name"]').type('Test title');
    cy.get('input[id="year"]').type('1995');
    cy.get('input[id="type"]').type('artwork');
    cy.get('input[id="description"]').type('Test description');
    cy.get('select[id="artist_dropwdown"]').select('Brett Whiteley');
    cy.get('button[type="submit"]').click();
  });
});
