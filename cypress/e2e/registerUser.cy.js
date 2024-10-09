describe('Register user functionality', () => {
    it('should allow successfully registration', () => {

        // Verify that home page is displayed
        cy.visitHome();

        // Verify that sign up form is displayed, then enter name and email
        cy.get('a[href="/login"]').click();
        cy.get('.signup-form').should('contain', 'New User Signup!');

        // Load data from fixture
        cy.fixture('userData').then((data) => {

            cy.get('[data-qa="signup-name"]').type(data.name);
            cy.get('[data-qa="signup-email"]').type(data.email);
            cy.get('[data-qa="signup-button"]').click();

            // Verify that 'ENTER ACCOUNT INFORMATION' is visible, then fill details
            cy.get('.login-form').should('contain', 'Enter Account Information');
            cy.fillUserDetails(data);
            cy.get('[data-qa="create-account"]').click();

            // Verify that account is created and user is logged in as username
            cy.get('[data-qa="account-created"]').should('contain', 'Account Created!');
            cy.get('[data-qa="continue-button"]').click();
            cy.get('.navbar-nav li').should('contain', 'Logged in as Vitalijus');

            // Delete account and verify that account is deleted
            cy.get('a[href="/delete_account"]').click();
            cy.contains('h2', 'Account Deleted').should('be.visible');
            cy.get('[data-qa="continue-button"]').click();
        });
    });
});


















