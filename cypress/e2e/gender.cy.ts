describe('Gender Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/quiz/2', { fixture: 'translation.ts' });
    cy.visit('/quiz/2');
  });

  it('renders options correctly', () => {
    cy.get('.gender').within(() => {
      cy.contains('Female').should('exist');
      cy.contains('Male').should('exist');
      cy.contains('Other').should('exist');
    });
  });

  it('stores selected option in localStorage and navigates to next step', () => {
    cy.get('.gender').within(() => {
      cy.contains('Female').click();
    });

    cy.url().should('include', '/quiz/3');

    cy.window().then((window) => {
      const savedData = JSON.parse(window.localStorage.getItem('2'));
      expect(savedData.answer).to.equal('Female');
    });
  });

  it('navigates correctly when different options are selected', () => {
    cy.get('.gender').within(() => {
      cy.contains('Male').click();
    });

    cy.url().should('include', '/quiz/3');

    cy.window().then((window) => {
      const savedData = JSON.parse(window.localStorage.getItem('2'));
      expect(savedData.answer).to.equal('Male');
    });
  });
});
