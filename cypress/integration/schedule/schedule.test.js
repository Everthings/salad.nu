describe("Schedule", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display no schedule cards one first load", () => {
    cy.get("[data-testid=schedule-card]").should("have.length", 0);
  });

  it("should display one or more schedule cards after section is selected", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=schedule-card]").should("have.length.of.at.least", 1);
  });

  it("should persist schedule cards on reload", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();

    cy.reload();

    cy.get("[data-testid=schedule-card]").should("have.length.of.at.least", 1);
  });

  it("should display title of selected course in schedule card", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");

    cy.get("[data-testid=info-card-title]")
      .first()
      .then((div) => {
        const title = div.text();

        cy.get("[data-testid=info-card]").first().click();
        cy.get("[data-testid=info-card]").first().click();

        cy.get("[data-testid=schedule-card-title]")
          .first()
          .should((titleElement) =>
            expect(titleElement.text().trim()).to.equal(title)
          );
      });
  });

  it("should display x button when schedule card is hovered", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=schedule-card]").first().trigger("mouseover");

    cy.get("[data-testid=schedule-card-x-button]").first().should("exist");
  });

  it("should not display 'already added' when schedule card x button is clicked", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=schedule-card]").first().trigger("mouseover");

    cy.get("[data-testid=schedule-card-x-button]").first().click();

    cy.get("[data-testid=info-card]")
      .first()
      .contains("already added")
      .should("not.exist");
  });
});
