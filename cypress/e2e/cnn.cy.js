describe('CNN Complete Test', () => {
    it('should open CNN.com', () => {
      cy.visit('https://www.cnn.com');
      cy.log('✅ SUCCESS: CNN.com loaded successfully!');
      console.log('✅ SUCCESS: CNN.com loaded successfully!');
    });
  
    it('should handle the consent popup', () => {
      cy.visit('https://www.cnn.com');
      cy.wait(3000);
      cy.contains('a', 'Agree').click();
      cy.contains('a', 'Agree').should('not.exist');
      cy.log('✅ SUCCESS: Agree button clicked and popup dismissed!');
      console.log('✅ SUCCESS: Agree button clicked and popup dismissed!');
    });
  });