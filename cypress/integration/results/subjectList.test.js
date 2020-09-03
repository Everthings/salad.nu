describe("SubjectList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display subject list when school is selected", () => {
    cy.get("[data-testid=school-list]").first().click();

    cy.get("[data-testid=subject-list]").should("exist");
  });

  it("should display subject list when search string is cleared", () => {
    cy.get("[data-testid=school-list]").first().click();

    cy.get("[data-testid=search-bar]").type("search");
    cy.get("[data-testid=search-bar]").clear();

    cy.get("[data-testid=subject-list]").should("exist");
  });

  it("should not display subject list when search is not empty", () => {
    cy.get("[data-testid=search-bar]").type("search");

    cy.get("[data-testid=subject-list]").should("not.exist");
  });
});
