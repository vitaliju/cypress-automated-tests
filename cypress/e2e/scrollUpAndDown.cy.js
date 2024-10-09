describe('Scroll up using "Arrow" button and scroll down functionality', () => {
    it('should allow scroll down and scroll up page', () => {

        // Verify that home page is displayed
        cy.visitHome();

        // Scroll down to bottom and verify that 'Subscription' is displayed
        cy.scrollTo('bottom');
        cy.contains('h2', 'Subscription').should('be.visible');

        // Scroll up using 'Arrow' button and verify 
        // that 'Full-Fledged practice website for Automation Engineers' is displayed
        cy.get('#scrollUp').click();
        cy.get('.carousel-inner')
            .should('contain', 'Full-Fledged practice website for Automation Engineers')
            .and('be.visible');
    });
});