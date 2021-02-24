describe("SectionList", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display one or more info cards after course is selected", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=info-card]").should("have.length.of.at.least", 1);
  });

  it("should display title of selected course as title", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");

    cy.get("[data-testid=info-card-title]")
      .first()
      .then((div) => {
        const title = div.text();

        cy.get("[data-testid=info-card]").first().click();

        cy.get("[data-testid=section-list-title]")
          .invoke("text")
          .should("equal", title);
      });
  });

  it("should display back button", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");

    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=back-button]").should("exist");
  });

  it("should return to course list after back button is pressed", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");

    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=back-button]").click();

    cy.get("[data-testid=course-list]").should("exist");
  });

  it("should display 'already added' after section is selected", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=info-card]")
      .first()
      .contains("already added")
      .should("exist");
  });
});
