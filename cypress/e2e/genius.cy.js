describe('Genius Artist from ENV', () => {
    it('should get artist info from environment variable', () => {
      Cypress.on('uncaught:exception', () => false);
  
      const artist = Cypress.env('artist') || 'Drake';
      cy.log(`🎤 Searching Genius for: ${artist}`);
  
      // Add failOnStatusCode: false to bypass 403 error
      cy.visit('https://genius.com', { 
        failOnStatusCode: false 
      });
  
      cy.get('input[name="q"]').type(artist);
      cy.get('.PageHeaderSearch-desktop__Icon-sc-20a96d12-1').click();
      
      cy.contains('.search_results_label', 'Top Result');
      cy.get('.search_results_label:contains("Top Result")')
        .next('div')
        .find('a')
        .first()
        .click({ force: true });
  
      cy.get('.truncated_annotation_text')
        .invoke('text')
        .then((bio) => {
          cy.log(`\n🎉 ${artist.toUpperCase()} BIOGRAPHY:`);
          cy.log('='.repeat(50));
          cy.log(bio.trim());
          cy.log('='.repeat(50));
        });
    });
  });