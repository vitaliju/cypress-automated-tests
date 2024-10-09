Cypress.Commands.add('visitHome', () => {
    cy.visit('');
    cy.title().should('include', 'Automation Exercise');
    cy.get('.navbar-nav').should('be.visible');
});

Cypress.Commands.add('fillUserDetails', (data) => {
    // register
    cy.get('input#id_gender1').click();
    cy.get('input#password').type(data.password);
    cy.get('select#days').select('15');
    cy.get('select#months').select('March');
    cy.get('select#years').select('2000');
    cy.get('input#newsletter').check();
    cy.get('input#optin').check();
    cy.get('input#first_name').type(data.first_name);
    cy.get('input#last_name').type(data.last_name);
    cy.get('input#company').type(data.company);
    cy.get('input#address1').type(data.address1);
    cy.get('input#address2').type(data.address2);
    cy.get('select#country').select(data.country);
    cy.get('input#state').type(data.state);
    cy.get('input#city').type(data.city);
    cy.get('input#zipcode').type(data.zipcode);
    cy.get('input#mobile_number').type(data.mobile_number);
});

Cypress.Commands.add('logoutUser', (data2) => {
    cy.get('[data-qa="login-email"]').type(data2.email);
    cy.get('[data-qa="login-password"]').type(data2.password);
});