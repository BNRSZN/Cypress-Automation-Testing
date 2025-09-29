describe('CNN Working Test', () => {
    it('should navigate to CNN and extract author name', () => {
      // IGNORE ALL ERRORS - we don't care about tracking scripts
      Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore all CNN tracking errors
        if (err.message.includes('track') || 
            err.message.includes('undefined') ||
            err.message.includes('google') ||
            err.message.includes('bolt.cnn.com')) {
          return false; // don't fail the test
        }
        return true;
      });
  
      cy.log('🚀 Starting CNN test...');
  
      // Step 1: Visit CNN (ignore load timeout warning)
      cy.visit('https://www.cnn.com', { 
        timeout: 15000,
        failOnStatusCode: false 
      });
  
      // Step 2: Click Agree button
      cy.get('a:contains("Agree")', { timeout: 5000 })
        .click({ force: true })
        .then(() => {
          cy.log('✅ Agree button clicked');
        });
  
      // Step 3: Click first article
      cy.get('.container_lead-package__item-media', { timeout: 7000 })
        .first()
        .click({ force: true })
        .then(() => {
          cy.log('✅ First article clicked');
        });
  
      // Step 4: Extract author name
      cy.get('.byline__name', { timeout: 10000 })
        .first()
        .invoke('text')
        .then((authorText) => {
          const author = authorText.trim();
          cy.log(`🎉 SUCCESS! Author: ${author}`);
          cy.log('✅ TEST COMPLETED SUCCESSFULLY!');
          
          // Final assertion
          expect(author).to.not.be.empty;
          expect(author.length).to.be.greaterThan(2);
        });
    });
  });