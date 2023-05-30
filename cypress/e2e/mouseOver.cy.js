describe("Mouse Over Test", () => {
  it("clicks on button 2 times", () => {
    cy.visit("http://uitestingplayground.com/mouseover");
    cy.get("[onmouseenter]").contains("Click me").click();
    cy.get("[onmouseenter]").contains("Click me").click();
    cy.get("#clickCount").should("contain", "2");
  });
});
