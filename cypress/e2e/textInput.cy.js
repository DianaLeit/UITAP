describe("Text Input Test", () => {
  it("changes the button name", () => {
    cy.visit("http://uitestingplayground.com/textinput");
    cy.get('#newButtonName').type('push me, qa-senpai');
    cy.get("#updatingButton").click().should("contain", "push me, qa-senpai");
  });
});
