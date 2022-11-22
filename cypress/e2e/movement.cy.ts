describe('Movements test', () => {
  it('should visit the movements url', () => {
    cy.visit('/movement/create');
    cy.wait(1000);
    cy.contains('Create a new movement');
  });

  it('should create a movement', () => {
    cy.visit('/movement/create');
    cy.wait(1000);
    cy.get('input[id="name"]').type('Test movement');
    cy.get('input[id="countryOfOrigin"]').type('Test country');
    cy.get('input[id="description"]').type('Test description');
    cy.get('button[type="submit"]').click();
  });
});
