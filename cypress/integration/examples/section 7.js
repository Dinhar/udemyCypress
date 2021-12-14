describe('Advance automation to handling Alerts, popups, Child Windows using Cypress', () => {
    it('alerts', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('#alertbtn').click();

        cy.get('[value="Confirm"]').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
    });

    it('Child tab', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('#opentab')
            .invoke('removeAttr', 'target')
            .click();

        cy.url().should('include', 'rahulshettyacademy');
        
        cy.go('back');
    });

    it('table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('tr td:nth-child(2)').each((row, index) => {
            const text = row.text();

            if(text.includes('Python')) {
                cy.get('tr td:nth-child(2)')
                    .eq(index)
                    .next()
                    .then((price) => {
                        const priceText = price.text();
                        expect(priceText).to.equal('25');
                    }); 
            }
        });
    });

    it.only('mouseover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');

        cy.get('.mouse-hover-content').invoke('show');
        
        cy.contains('Top').click();

        cy.url().should('include', 'top');
    });
});