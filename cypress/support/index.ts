/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
  interface Chainable {
    getBySel(selector: string): Chainable<JQuery<HTMLElement>>
  }
}
