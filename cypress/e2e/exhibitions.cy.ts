
describe('Exhibitions test', () => {

  it('should view the list of exhibition of a museum', () => {
    cy.visit('/museums-list');
    cy.wait(2000);
    cy.get('div.col-md-3:first-of-type').click();
    cy.wait(1000);
    cy.get('p[id="exhibitions-button"]').click();
    cy.wait(1000);
    cy.contains('Modern Australia');
  });

  it('should view the detail of an exhibition of a museum', () => {
    cy.visit('/museums-list');
    cy.wait(2000);
    cy.get('div.col-md-3:first-of-type').click();
    cy.wait(1000);
    cy.get('p[id="exhibitions-button"]').click();
    cy.wait(1000);
    cy.get('button[id="Modern Australia"]').click();
    cy.wait(1000);
    cy.contains("This selection of works from the Gallery's collection traces the key movements in Modern Australian art and design, and the search for a distinctive Australian visual arts style throughout the mid twentieth century.");
  });

  it('should visit the exhibition creation url', () => {
    cy.visit('/exhibitions/create');
    cy.wait(1000);
    cy.contains('Create a new exhibition');
  });

  it('should create an exhibition', () => {
    cy.visit('/exhibitions/create');
    cy.wait(2000);
    cy.get('input[id="name"]').type('Test exhibition');
    cy.get('input[id="description"]').type('Test description');
    cy.get('select[id="sponsor_dropdown"]').select('Allianz');
    cy.wait(1000);
    cy.get('button[type="submit"]').click();
  });
});
