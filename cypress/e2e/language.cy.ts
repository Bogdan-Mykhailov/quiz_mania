describe('Language Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/quiz/1', { fixture: 'translation.ts' });
    cy.visit('/quiz/1');
  });

  it('renders language options correctly', () => {
    cy.get('.language').within(() => {
      cy.get('.secondary').should('have.length', 4);
      cy.get('.secondary').eq(0).should('contain', 'English');
      cy.get('.secondary').eq(1).should('contain', 'French');
      cy.get('.secondary').eq(2).should('contain', 'German');
      cy.get('.secondary').eq(3).should('contain', 'Spanish');
    });
  });

  it('changes language to French on button click', () => {
    cy.get('.language').within(() => {
      cy.get('.secondary').eq(1).click();
      cy.url().should('include', '/quiz/2');
      cy.window().then((window) => {
        const savedData = JSON.parse(window.localStorage.getItem('1'));
        expect(savedData.answer).to.equal('French');
      });
    });
  });
});
