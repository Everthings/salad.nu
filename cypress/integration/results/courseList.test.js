describe("CourseList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display no text if search string is empty", () => {
    cy.get("[data-testid=course-list]")
      .contains("No Results")
      .should("not.exist");
    cy.get("[data-testid=course-list]")
      .contains("Continue typing...")
      .should("not.exist");
  });

  it("should display 'No Results' if no results for search", () => {
    cy.get("[data-testid=search-bar]").type(
      "there will be no results for this string"
    );

    cy.get("[data-testid=course-list]").contains("No Results").should("exist");
  });

  it("should display 'Continue typing...' if search string too short", () => {
    cy.get("[data-testid=search-bar]").type(
      "t h i s i s a s h o r t s t r i n g"
    );

    cy.get("[data-testid=course-list]")
      .contains("Continue typing...")
      .should("exist");
  });

  it("should display one or more info cards if search string matches", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");

    cy.get("[data-testid=info-card]").should("have.length.of.at.least", 1);
  });
});
