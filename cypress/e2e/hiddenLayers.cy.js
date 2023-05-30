describe("Hidden Layers Test", () => {
  it("duplicates the button click", () => {
    cy.visit("http://uitestingplayground.com/hiddenlayers");
    cy.get("#greenButton").click();
    cy.get("#blueButton").click();
  });
});
