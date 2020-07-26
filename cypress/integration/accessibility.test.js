/// <reference types="Cypress" />
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("main")
      .injectAxe();
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.get("footer").scrollIntoView();
    cy.wait(1000);
    cy.checkA11y();
  });
});
