describe('Logout user is successful', () => {
    it('should allow logout user', () => {

        // Verify that home page is visible successfully
        cy.visitHome();

        // Verify that login form is displayed 
        cy.get('a[href="/login"]').should('be.visible').click();
        cy.get('.login-form').should('contain', 'Login to your account');

        // Enter correct email and password and verify that logged in as username
        cy.fixture('userData2').then((data2) => {
            cy.logoutUser(data2);
            cy.get('[data-qa="login-button"]').click();
            cy.get('.navbar-nav li').should('contain', 'Logged in as Vitalijus');
        });

        // Click 'Logout' and verify that user is navigated to login page
        cy.get('a[href="/logout"]').click();
        cy.url().should('eq', 'https://www.automationexercise.com/login');
        cy.get('.login-form').should('contain', 'Login to your account');
    });
});