/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

Cypress.on(`uncaught:exception`, (err, runnable) => {
  return false;
})

describe(`template spec`, () => {
  it(`types name, selects dropdown choice, confirms history log`, () => {
    cy.visit(`index.html`)

    cy.get(`input[name="username"]`).type(`Ethan White`)

    cy.get(`select`).select(`rock`)

    cy.get(`button[id="go-button"`).click()
  })
})