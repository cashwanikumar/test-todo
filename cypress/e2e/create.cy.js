/* eslint-disable promise/always-return */
/* eslint-disable sonarjs/no-duplicate-string */
/// <reference types="cypress" />

const baseUrl = Cypress.env('baseUrl');

describe('Todo Page', () => {

  context('test todo', () => {
    beforeEach(() => {
      cy.visit(`${baseUrl}`);
    });

    it('title should be visible', () => {
        cy.findAllByText('Things To Do').should('have.length', 1)
    });

    it('check menu', () => {
        cy.findByRole('button', {name: 'Open menu'}).click()
        cy.findByText('Save').click()
    });
  });
});
