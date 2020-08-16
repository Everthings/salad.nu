describe("SearchBar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should be focused on page load", () => {
    cy.focused().should("have.attr", "data-testid", "search-bar");
  });

  it("should accept input", () => {
    const txt = "this is some text";

    cy.get("[data-testid=search-bar]").type(txt).should("have.value", txt);
  });

  it("should clear input", () => {
    const txt = "this is some text";

    cy.get("[data-testid=search-bar]").type(txt);

    cy.get("[data-testid=search-bar]").clear().should("have.value", "");
  });

  it("should clear input on reload", () => {
    const txt = "this is some text";

    cy.get("[data-testid=search-bar]").type(txt);
    cy.reload();

    cy.get("[data-testid=search-bar]").clear().should("have.value", "");
  });

  it("should display course list when search bar is changed", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=search-bar]").type("PHIL");

    cy.get("[data-testid=course-list]").should("exist");
  });
});
