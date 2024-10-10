describe('"ALL PRODUCTS" and product detail pages load successfully', () => {
    it('displays "ALL PRODUCTS" and products details pages', () => {

        // Verify home page is displayed
        cy.visitHome();

        // Navigate to Products page and verify that page is displayed
        cy.get('a[href="/products"]').click();
        cy.url().should('eq', 'https://www.automationexercise.com/products');
        cy.get('.features_items').should('contain', 'All Products');

        // Verify that products list is visible and click on 'View Product'
        cy.get('.col-sm-4').should('be.visible');
        cy.get('a[href="/product_details/1"]').click();


    });
});