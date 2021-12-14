describe('Understand how to automate frames & child windows in Cypress', () => {
    it('Child windows', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('#opentab').then((href) => {
            const url = href.prop('href');

            cy.visit('https://vk.com/');
        });
    });
});