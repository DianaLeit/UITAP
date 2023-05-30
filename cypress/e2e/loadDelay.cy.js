describe("Load Delay Test", () => {
  it("clicks on button after waiting for load", () => {
    cy.visit("http://uitestingplayground.com");
    cy.get('.col-sm').contains("Load Delay").click();
    cy.get(".btn").click();
  });
});
