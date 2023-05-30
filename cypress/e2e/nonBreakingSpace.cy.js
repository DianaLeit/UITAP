describe("Non-Breaking Space Test", () => {
  it("Searches for an element by its text with non-breaking space", () => {
    cy.visit("http://uitestingplayground.com/nbsp");
    cy.get(".btn").contains("My Button");
  });
});
