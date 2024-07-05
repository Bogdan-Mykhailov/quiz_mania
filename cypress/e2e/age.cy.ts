describe('Age Component', () => {
  beforeEach(() => {
    localStorage.setItem('quizData', JSON.stringify({
      title: "What is your age?",
      params: ['18-29 years', '30-39 years', '40-49 years', '50+'],
      type: 'single-select',
    }));

    cy.visit(`/quiz/3`);
  });

  it('renders age options correctly', () => {
    cy.get('.age').within(() => {
      cy.get('button').should('have.length', 4);
      cy.get('button').eq(0).should('contain', '18-29 years');
      cy.get('button').eq(1).should('contain', '30-39 years');
      cy.get('button').eq(2).should('contain', '40-49 years');
      cy.get('button').eq(3).should('contain', '50+');
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
