/* eslint-disable no-undef */
describe(`My First Test`, () => {
  it(`clicking "type" navigates to a new url`, () => {
    cy.visit(`https://example.cypress.io`)

    cy.contains(`type`).click()

    cy.url().should(`include`, `/commands/actions`)

    cy.get(`.action-email`).type(`fake@email.com`)

    cy.get(`.action-email`).should(`have.value`, `fake@email.com`)
  })
})