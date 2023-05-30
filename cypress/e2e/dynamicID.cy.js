describe("Dynamic ID Test", () => {
  it("clicks on button with dynamic ID", () => {
    cy.visit("http://uitestingplayground.com/classattr");
    cy.get("button.btn-primary").click();
  });
});
