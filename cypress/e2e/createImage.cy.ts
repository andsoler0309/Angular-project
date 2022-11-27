describe('Create test', () => {
  it('should visit the image url', () => {
    cy.visit('/image-create');
    cy.wait(1000);
  });

  it('should Create a new image', () => {
    cy.visit('/create-image');
    cy.wait(1000);
    cy.get('input[id="source"]').type('Source Image');
    cy.get('input[id="altText"]').type('Image Alt');
    cy.get('input[id="width"]').type('200');
    cy.get('input[id="height"]').type('300');
    cy.get('button[type="submit"]').click();
  });
});
