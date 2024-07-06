describe('MultiStepProgressBar Component', () => {
  beforeEach(() => {
    cy.visit('/quiz/3');
  });

  it('renders the current step and total steps', () => {
    cy.get('.info__current-step').should('contain.text', '3');
    cy.get('.info__total-steps').should('contain.text', '5');
  });

  it('shows the back button when on step 2 or higher', () => {
    cy.get('.progressbar__back-icon').should('be.visible');
  });

  it('does not show the back button on step 1', () => {
    cy.visit('/quiz/1');
    cy.get('.progressbar__back-icon').should('not.exist');
  });

  it('navigates to the previous step when back button is clicked', () => {
    cy.visit('/quiz/3');
    cy.get('.progressbar__back-icon').click();
    cy.url().should('include', '/quiz/2');
  });
});
