/// <reference types="cypress" />

describe('My test suite', () => {
    it('My test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca');

        cy.get('.product:visible').should('have.length', 4);

        cy.get('.products').as('productLocator');

        cy.get('@productLocator')
            .find('.product')
            .should('have.length', 4);

        cy.get('@productLocator')
            .find('.product')
            .eq(1)
            .contains('ADD TO CART')
            .click();
        
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text();

                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click();
                }
            });

        cy.get('.brand').should('have.text', 'GREENKART');
            
        cy.get('.brand').then( (logoElement) => {
            cy.log(logoElement.text());
        });
    });

    it.only('Check Cart', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ca');

        cy.get('.product').should('be.visible'); // вместо костыля cy.wait(2000)

        cy.get('.products').as('productLocator');
        
        cy.get('@productLocator')
            .find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text();

                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find('button').click();
                }
            });

        cy.get('.cart-icon > img').click();

        cy.get('.action-block')
            .contains('PROCEED TO CHECKOUT')
            .click();

        cy.contains('Place Order').click();
    });
});