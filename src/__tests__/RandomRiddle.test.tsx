import { App } from '../App';

describe('Random riddle', () => {
    it('see random riddle', () => {
        cy.intercept('GET', '**/riddles/RIDDLE_ID', {
            body: {
                id: 'RIDDLE_ID',
                contents: 'What is the capital of France?',
                answers: [],
            },
        });
        cy.intercept('GET', '**/riddles', {
            body: [
                {
                    id: 'RIDDLE_ID',
                    contents: 'What is the capital of France?',
                    answers: [],
                },
            ],
        });

        cy.mount(<App />, '/');

        cy.getByTestId('work-interval').should('be.visible');
        cy.getByTestId('timestamp').should('be.visible');
        cy.getByTestId('welcome-message').should('be.visible');
        cy.getByTestId('random-riddle').click();

        cy.url().should('include', '/riddle/RIDDLE_ID');
        cy.contains('What is the capital of France?').should('be.visible');
    });
});
