
describe('Artist test', () => {
  it('should visit the artist creation url', () => {
    cy.visit('/artist/create');
    cy.wait(1000);
    cy.contains('Create a new artist');
  });

  it('should create an artist', () => {
    cy.visit('/artist/create');
    cy.wait(1000);
    cy.get('input[id="name"]').type('Test artist');
    cy.get('input[id="birthplace"]').type('Test birthplace');
    cy.get('input[id="birthdate"]').type('1994-05-15');
    cy.get('select[id="image"]').select('100');
    cy.get('button[type="submit"]').click();
  });
});
