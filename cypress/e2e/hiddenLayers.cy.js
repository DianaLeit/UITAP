describe("Hidden Layers Test", () => {
  it("duplicates the button click and makes sure that green button doesn`t hit twice", () => {
    cy.visit("http://uitestingplayground.com/hiddenlayers");
    cy.get("#greenButton").click();
    cy.get("#blueButton").click();
  });
});
