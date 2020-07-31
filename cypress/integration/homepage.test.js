/// <reference types="Cypress" />

function terminalLog(violations) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} ${
      violations.length === 1 ? "was" : "were"
    } detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length,
  }));

  cy.task("table", violationData);
}
describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("main")
      .injectAxe()
      .get("#contact")
      .scrollIntoView()
      .wait(1000)
      .get("#gatsby-focus-wrapper")
      .scrollIntoView();
  });

  it("Has no detectable accessibility violations on load in dark mode", () => {
    cy.checkA11y(null, null, terminalLog);
  });

  it("Has no detectable accessibility violations on load in light mode", () => {
    cy.get("#theme-checkbox")
      .click({ force: true })
      .wait(100);
    cy.checkA11y(null, null, terminalLog);
  });
});

describe("Functionality tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("main")
      .injectAxe()
      .get("#contact")
      .scrollIntoView()
      .wait(1000)
      .get("#gatsby-focus-wrapper")
      .scrollIntoView();
  });

  it("Toggles mobile navigation", () => {
    cy.viewport("iphone-6");
    cy.get("header div button")
      .first()
      .click()
      .get("header div")
      .should("have.css", "position", "fixed");
    cy.get("header div button")
      .first()
      .click()
      .get("header div")
      .should("have.css", "width", "80px");
  });
});
