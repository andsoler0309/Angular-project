describe('Create test', () => {
  it('should visit the image url', () => {
    cy.visit('/create-museum');
    cy.wait(1000);
  });

  it('should create an Museum', () => {
    cy.visit('/create-museum');
    cy.wait(1000);

    cy.get('input[id="name"]').type('Test title');
    cy.get('input[id="image"]').type('Image');
    cy.get('input[id="altImage"]').type('Alt image');
    cy.get('input[id="wImage"]').type('200');
    cy.get('input[id="hImage"]').type('300');
    cy.get('input[id="address"]').type('Museums Address');
    cy.get('input[id="city"]').type('Museums City');
    cy.get('input[id="description"]').type('Test description');
    cy.get('button[type="submit"]').click();
  });
});
