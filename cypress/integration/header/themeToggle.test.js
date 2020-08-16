import Color from "color";
import { greenTheme } from "./../../../src/components/themes/greenTheme";
import { darkTheme } from "./../../../src/components/themes/darkTheme";

describe("ThemeToggle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should change to black when toggle clicked", () => {
    cy.get("[data-testid=theme-toggle]").click({ force: true });

    cy.get("[data-testid=app-body]")
      .should("have.css", "background-color")
      .and("eq", Color(darkTheme.colors.background).string());
  });

  it("should change to green when toggle clicked twice", () => {
    cy.get("[data-testid=theme-toggle]").click({ force: true });
    cy.get("[data-testid=theme-toggle]").click({ force: true });

    cy.get("[data-testid=app-body]")
      .should("have.css", "background-color")
      .and("eq", Color(greenTheme.colors.background).string());
  });

  it("should persist color on reload", () => {
    cy.get("[data-testid=theme-toggle]").click({ force: true });
    cy.reload();

    cy.get("[data-testid=app-body]")
      .should("have.css", "background-color")
      .and("eq", Color(darkTheme.colors.background).string());
  });
});
