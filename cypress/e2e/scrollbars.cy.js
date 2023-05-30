describe("Scrollbars Test", () => {
  it("scrolls the button into a visible area and clicks it", () => {
    cy.visit("http://uitestingplayground.com/scrollbars");
    cy.get("#hidingButton").scrollIntoView().should("be.visible").click();
  });
});

