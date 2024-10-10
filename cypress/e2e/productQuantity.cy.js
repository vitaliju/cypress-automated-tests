describe('Product quantity in Cart is correct', () => {
    it('displays correct product quantity in Cart', () => {
        const quantity = '4';

        // Verify that home page is displayed
        cy.visitHome();

        // Click 'View Product' and verify product detail is opened
        cy.get('a[href="/product_details/2"]').click();
        cy.url().should('eq', 'https://www.automationexercise.com/product_details/2');
        cy.get('.product-details').should('be.visible');

        // Increase quantity to 4 and add to cart
        cy.get('input#quantity').clear().type(quantity);
        cy.contains('button', 'Add to cart').click();

        // Verify that product is displayed in cart page with exact quantity
        cy.contains('View Cart').click();
        cy.get('.cart_quantity').should('contain.text', quantity);
    });
});