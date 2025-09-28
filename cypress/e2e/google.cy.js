describe('Google Search', () => {
  it('should search from the homepage', () => {
    cy.visit('https://www.google.com');

    // Handle "Stay signed out" popup if it shows up
    cy.get('body').then(($body) => {
      if ($body.find('span:contains("Stay signed out")').length) {
        cy.contains('Stay signed out').click();
      }
    });

    // Use the textarea with id 'APjFqb'
    cy.get('#APjFqb', { timeout: 10000 })
      .should('be.visible')
      .type('Cypress testing{enter}');

    // Verify results contain "Cypress"
    cy.contains('Cypress').should('exist');
  });
});