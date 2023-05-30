describe("Class Atribute Test", () => {
  it("identifies the blue button and clicks on it", () => {
    cy.visit("http://uitestingplayground.com/classattr");
    cy.get("button.btn-primary").click();
  });
});
