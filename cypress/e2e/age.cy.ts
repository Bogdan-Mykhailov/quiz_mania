describe('Age Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/quiz/3', { fixture: 'translation.ts' });
    cy.visit(`/quiz/3`);
  });

  it('renders age options correctly', () => {
    cy.get('.age').within(() => {
      cy.get('button').should('have.length', 4);
      cy.contains('button', '18-29 years').should('exist');
      cy.contains('button', '30-39 years').should('exist');
      cy.contains('button', '40-49 years').should('exist');
      cy.contains('button', '50+').should('exist');
    });
  });

  it('stores selected age in localStorage and navigates to next step', () => {
    cy.get('button').eq(1).click();

    cy.window().then((window) => {
      const savedData = JSON.parse(window.localStorage.getItem('3'));
      expect(savedData).to.deep.equal({
        order: '3',
        title: 'What is your age?',
        type: 'single-select',
        answer: '30-39 years'
      });
    });

    cy.url().should('include', '/quiz/4');
  });
});
