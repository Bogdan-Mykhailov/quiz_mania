describe('Book Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/quiz/4', { fixture: 'translation.ts' });
    cy.visit('/quiz/4');
  });

  it('renders book options correctly', () => {
    cy.get('.book').within(() => {
      cy.contains('Lack of logic').should('exist');
      cy.contains('A slow speed').should('exist');
      cy.contains('Lack of humor').should('exist');
      cy.contains('Way too generic ending').should('exist');
    });
  });

  it('disables next button when no books are selected', () => {
    cy.get('.book').within(() => {
      cy.get('.primary__disabled').should('be.disabled');
    });
  });

  it('allows selecting and deselecting books', () => {
    cy.get('.book').within(() => {
      cy.contains('Lack of logic').click();
      cy.get('.container__input').eq(0).should('be.checked');

      cy.contains('A slow speed').click();
      cy.get('.container__input').eq(1).should('be.checked');

      cy.contains('Lack of logic').click();
      cy.get('.container__input').eq(0).should('not.be.checked');
    });
  });

  it('stores selected books in localStorage and navigates to next step', () => {
    cy.get('.book').within(() => {
      cy.contains('Lack of logic').click();
      cy.contains('A slow speed').click();
    });

    cy.get('.primary').click();
    cy.url().should('include', '/quiz/5');
    cy.window().then((window) => {
      const savedData = JSON.parse(window.localStorage.getItem('4'));
      expect(savedData.answer).to.deep.equal(['Lack of logic', 'A slow speed']);
    });
  });

  it('enables next button when books are selected', () => {
    cy.get('.book').within(() => {
      cy.contains('Lack of logic').click();
      cy.contains('A slow speed').click();
      cy.get('.primary').should('not.be.disabled');
    });
  });
});
