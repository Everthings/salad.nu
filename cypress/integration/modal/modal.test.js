describe("Modal", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should not display modal on first load", () => {
    cy.get(".ReactModal__Content").should("not.exist");
  });

  it("should display modal when section info card is clicked", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card-more-info-button]").first().click();

    cy.get(".ReactModal__Content").should("exist");
  });

  it("should display modal after schedule card is selected", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();

    cy.get("[data-testid=schedule-card]").first().click();

    cy.get(".ReactModal__Content").should("exist");
  });

  it("should not display modal after remove is clicked", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=schedule-card]").first().click();

    cy.get("[data-testid=modal-remove-button]").click();

    cy.get(".ReactModal__Content").should("not.exist");
  });

  it("should not display course when remove is clicked", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=schedule-card]").first().click();

    cy.get("[data-testid=modal-remove-button]").click();

    cy.get("[data-testid=schedule-card]").should("not.exist");
  });

  it("should not display modal when exit is clicked", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");
    cy.get("[data-testid=info-card]").first().click();
    cy.get("[data-testid=info-card-more-info-button]").first().click();
    cy.get("[data-testid=modal-exit-button]").first().click();

    cy.get(".ReactModal__Content").should("not.exist");
  });

  it("should display title of section as heading", () => {
    cy.get("[data-testid=search-bar]").type("COMP SCI");

    cy.get("[data-testid=info-card-title]")
      .first()
      .then((div) => {
        const title = div.text();

        cy.get("[data-testid=info-card]").first().click();
        cy.get("[data-testid=info-card-more-info-button]").first().click();

        cy.get("[data-testid=modal-heading]")
          .invoke("text")
          .should("equal", title);
      });
  });
});
