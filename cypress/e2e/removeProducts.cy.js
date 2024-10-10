describe('Remove product from the cart', () => {
    it('should allow to remove product from the cart', () => {
        const productId = '2';
        // Verify that home page is visible
        cy.visitHome();

        // Add product to cart and navigate to view_cart page
        cy.get(`a[data-product-id="${productId}"]`).first().contains('Add to cart').trigger('mouseover');
        cy.get(`a[data-product-id="${productId}"]`).first().contains('Add to cart').click();
        cy.get('.btn.btn-success.close-modal').should('be.visible').click();
        cy.get('a[href="/view_cart"]').first().should('contain.text', 'Cart').click();

        // Verify that cart page is displayed
        cy.url().should('eq', 'https://www.automationexercise.com/view_cart');

        // Remove product from the cart and verify that product is removed
        cy.get(`a[data-product-id="${productId}"]`).click();
        cy.get('#empty_cart').should('contain', 'Cart is empty!');
    });
});