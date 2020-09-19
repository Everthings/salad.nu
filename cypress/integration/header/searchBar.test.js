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

  it("should display course list when search bar is changed", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=search-bar]").clear();
    cy.get("[data-testid=search-bar]").type("PHIL");

    cy.get("[data-testid=course-list]").should("exist");
  });

  it("should clear input on reload", () => {
    const txt = "this is some text";

    cy.get("[data-testid=search-bar]").type(txt);
    cy.reload();

    cy.get("[data-testid=search-bar]").clear().should("have.value", "");
  });

  it("should clear school on reload", () => {
    cy.get("[data-testid=school-list]").first().click();

    cy.reload();

    cy.get("[data-testid=school-tag]").should("not.exist");
  });

  it("should clear subject on reload", () => {
    cy.get("[data-testid=school-list]").first().click();
    cy.get("[data-testid=subject-list]").first().click();

    cy.reload();

    cy.get("[data-testid=search-tag]").should("not.exist");
  });

  it("should display school when school is selected", () => {
    cy.get("[data-testid=school-list]").first().click();

    cy.get("[data-testid=search-tag]").should("exist");
  });

  it("should display subject when subject is selected", () => {
    cy.get("[data-testid=school-list]").first().click();
    cy.get("[data-testid=subject-list]").first().click();

    cy.get("[data-testid=search-tag]").should("have.length", 2);
  });

  it("should display remove both school and subject when school tag is clicked", () => {
    cy.get("[data-testid=school-list]").first().click();
    cy.get("[data-testid=subject-list]").first().click();

    cy.get("[data-testid=search-tag]").first().click();

    cy.get("[data-testid=search-tag]").should("not.exist");
  });

  it("should remove only subject when subject tag is clicked", () => {
    cy.get("[data-testid=school-list]").first().click();
    cy.get("[data-testid=subject-list]").first().click();

    cy.get("[data-testid=search-tag]").last().click();

    cy.get("[data-testid=search-tag]").should("have.length", 1);
  });
});
