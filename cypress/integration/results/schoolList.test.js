describe("SchoolList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display school list on load", () => {
    cy.get("[data-testid=school-list]").should("exist");
  });

  it("should display school list when search string is cleared", () => {
    cy.get("[data-testid=search-bar]").type("search");
    cy.get("[data-testid=search-bar]").clear();

    cy.get("[data-testid=school-list]").should("exist");
  });

  it("should not display school list when search is not empty", () => {
    cy.get("[data-testid=search-bar]").type("search");

    cy.get("[data-testid=school-list]").should("not.exist");
  });
});
