describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/quiz/5', { fixture: 'translation.ts' });
    cy.visit('/quiz/5');
    cy.get('.primary__disabled').should('exist');
    cy.get('.topics__wrapper > :nth-child(1)').click();
    cy.get('.primary').should('exist');
    cy.get('.primary').click();
  });

  it('renders CircularProgressBar with default duration', () => {
    cy.get('.circular-progressbar').should('exist');
    cy.get('.circular-progress-bar__percentage').should('contain.text', '0%');
  });

  it('progresses to 80% after specified duration', () => {
    const duration = 4;

    cy.clock();

    cy.get('.circular-progress-bar__percentage').should('contain.text', '0%');
    cy.tick((duration) * 1000);
    cy.get('.circular-progress-bar__percentage').should('contain.text', '80%');
  });

  it('navigates to the next step after progress completes', () => {
    const duration = 5;
    cy.wait((duration) * 1000);
    cy.url().should('include', '/email');
  });
});
