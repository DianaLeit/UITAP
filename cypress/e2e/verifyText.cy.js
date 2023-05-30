describe("Verify Text Test", () => {
  it("finds an element with Welcome... text.", () => {
    cy.visit("http://uitestingplayground.com/verifytext");
    cy.get(".bg-primary").contains("Welcome");
  });
});
