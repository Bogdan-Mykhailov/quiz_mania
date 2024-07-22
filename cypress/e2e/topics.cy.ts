describe('Topics Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/quiz/5', {fixture: 'translation.ts'});
    cy.visit('/quiz/5');
  });

  it('disables next button when no topics are selected', () => {
    cy.get('.topics').within(() => {
      cy.get('.primary__disabled').should('be.disabled');
    });
  });

  it('allows selecting and deselecting topics', () => {
    cy.get('.topics__wrapper > :nth-child(1)').click();
    cy.get('.topics__wrapper > :nth-child(1)').should('have.class', 'border');
    cy.get('.topics__wrapper > :nth-child(1)').click();
    cy.get('.topics__wrapper > :nth-child(1)').should('not.have.class', 'border');
  });

  it('stores selected topics in localStorage', () => {
    cy.get('.topics__wrapper > :nth-child(1)').click();
    cy.get('.topics__wrapper > :nth-child(2)').click();
    cy.window().then((window) => {
      const savedData = JSON.parse(window.localStorage.getItem('5'));
      expect(savedData.answer).to.deep.equal(['Werewolf', 'Romance']);
    });
  });

  it('enables next button when topics are selected', () => {
    cy.get('.topics__wrapper > :nth-child(1)').click();
    cy.get('.primary').should('not.be.disabled');
  });

  it('navigates to the next page when next button is clicked and progress completes', () => {
    cy.get('.topics__wrapper > :nth-child(1)').click();
    cy.get('.primary').click();

    cy.clock();
    cy.get('.circular-progress-bar__percentage').should('contain.text', '0%');

    cy.get('.circular-progress-bar__percentage', { timeout: 5000 }).should('contain.text', '99%');
    cy.url().should('include', '/email');
  });
});
