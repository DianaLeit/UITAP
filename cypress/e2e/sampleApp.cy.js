describe("Sample App Test", () => {
  it("Logs in", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");
    cy.get(".form-control[name=UserName]").type("LazyBlob");
    cy.get(".form-control[name=Password]").type("pwd");
    cy.get("#login").click();
    cy.get("#loginstatus").should('contain', 'Welcome, LazyBlob!');
  });
});

