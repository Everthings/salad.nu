describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display logo, searchbar, export button, about link, and theme toggle when screen is large", () => {
    cy.viewport("macbook-15");

    cy.get("[data-testid=logo]").should("exist");
    cy.get("[data-testid=search-bar]").should("exist");
    cy.get("[data-testid=export-button]").should("exist");
    cy.get("[data-testid=about-link]").should("exist");
    cy.get("[data-testid=theme-toggle]").should("exist");
  });

  it("should only display searchbar and theme toggle when screen is small", () => {
    cy.viewport("iphone-x");

    cy.get("[data-testid=logo]").should("not.exist");
    cy.get("[data-testid=search-bar]").should("exist");
    cy.get("[data-testid=export-button]").should("not.exist");
    cy.get("[data-testid=about-link]").should("not.exist");
    cy.get("[data-testid=theme-toggle]").should("exist");
  });
});
