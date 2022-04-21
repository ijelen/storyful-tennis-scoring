/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("A visitor", function () {
  it("loads the score board", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Option one: Tennis scoring");
  });

  it("clicks the first player's add point button", () => {
    // Test if clicking first player's button changes 'love' to 'fifteen'
    cy.get("#playerOne").should("contain", "Player 1");
    cy.get("#playerOne").should("contain", "love");
    cy.get("#playerOne button").click();
    cy.get("#playerOne").should("contain", "fifteen");
  });

  it("clicks the second player's add point button", () => {
    // Test if clicking second player's button changes 'love' to 'fifteen'
    cy.get("#playerTwo").should("contain", "Player 2");
    cy.get("#playerTwo").should("contain", "love");
    cy.get("#playerTwo button").click();
    cy.get("#playerTwo").should("contain", "fifteen");
  });

  it("resets the scoreboard", () => {
    cy.contains("reset").click();
    cy.get("#playerOne").should("contain", "love");
    cy.get("#playerTwo").should("contain", "love");
  });
});
