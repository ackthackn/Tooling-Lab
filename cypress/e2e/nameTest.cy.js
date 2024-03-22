/* eslint-disable no-undef */
describe(`template spec`, () => {
  it(`types name, selects dropdown choice, confirms history log`, () => {
    cy.visit(`index.html`)

    cy.get(`input[name="username"]`).type(`Ethan White`)

    cy.get(`select`).select(`rock`)
  })
})