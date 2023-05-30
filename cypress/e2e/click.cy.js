describe("Click Test", () => {
  it("clicks the button that ignores DOM click event", () => {
    cy.visit("http://uitestingplayground.com/click");
    cy.get("#badButton").click().click();
  });
});
