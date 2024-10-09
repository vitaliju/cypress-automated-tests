describe('Registration user with existing email', () => {
    it('should not allow registration with existing email', () => {

        // Verify that home page is displayed
        cy.visitHome();

        // Navigate to sign/login page
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form').should('contain', 'New User Signup!');

        // Enter new name and existing email
        cy.fixture('userData3').then((data3) => {
            cy.get('[data-qa="signup-name"]').type(data3.name);
            cy.get('[data-qa="signup-email"]').type(data3.email);
            cy.get('[data-qa="signup-button"]').click();
        });

        // Verify error message is displayed
        cy.contains('.signup-form p', 'Email Address already exist').should('be.visible');
    });
});