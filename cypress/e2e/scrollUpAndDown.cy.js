describe('Scroll up using "Arrow" button and scroll down functionality', () => {
    it('should allow scroll down and scroll up page', () => {

        // Verify that home page is displayed
        cy.visitHome();

        // Scroll down to bottom and verify that 'Subscription' is displayed
        cy.scrollTo('bottom');
        cy.contains('h2', 'Subscription').should('be.visible');


    });
});