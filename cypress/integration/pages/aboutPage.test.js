describe("AboutPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display about page when about link clicked", () => {
    cy.get("[data-testid=about-link]").click();

    cy.get("[data-testid=about-back-button]").should("exist");
  });

  it("should return to root page when back link clicked", () => {
    cy.get("[data-testid=about-link]").click();
    cy.get("[data-testid=about-back-button]").click();

    cy.get("[data-testid=about-link]").should("exist");
  });
});
