/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe';

describe('Understand how to automate frames & child windows in Cypress', () => {
    it('Child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('#opentab').then((href) => {
            const url = href.prop('href');

            cy.visit('https://vk.com/');
        });
    });

    it.only('frames', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        
        cy.frameLoaded('#courses-iframe');

        cy.iframe()
            .find('a[href*="mentorship"]')
            .eq(0)
            .click();
    });
});