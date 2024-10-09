describe('Login with incorrect email and password', () => {
    it('should not allow successfully login', () => {

        // Verify that home page is displayed
        cy.visitHome();

        // Navigate to login page
        cy.get('a[href="/login"]').click();
        cy.get('.login-form').should('contain', 'Login to your account');

        // Enter incorrect email and password
        cy.fixture('invalidData').then((data) => {
            cy.get('[data-qa="login-email"]').type(data.email);
            cy.get('[data-qa="login-password"]').type(data.password);
            cy.get('[data-qa="login-button"]').click();
        });

        // Verify that error message is displayed
        cy.get('.login-form').should('contain', 'Your email or password is incorrect!');
    });
});