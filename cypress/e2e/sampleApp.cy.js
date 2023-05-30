describe("Sample App Test", () => {
  it("logs in and checks that status contains proper text", () => {
    cy.visit("http://uitestingplayground.com/sampleapp");
    cy.get(".form-control[name=UserName]").type("LazyBlob");
    cy.get(".form-control[name=Password]").type("pwd");
    cy.get("#login").click();
    cy.get("#loginstatus").should("contain", "Welcome, LazyBlob!");
  });
});
