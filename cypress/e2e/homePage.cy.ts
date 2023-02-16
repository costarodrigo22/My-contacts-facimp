describe('template spec', () => {
  it('create new contact', () => {
    cy.visit('http://127.0.0.1:5173/');

    // cy.intercept('http://localhost:2000/api/contact/index').as('getContactList');
    // cy.wait('@getContactList');

    cy.get('[data-test=button-new]').click();

    cy.getBySel('input-name').type('Jhonata');

  });
});
