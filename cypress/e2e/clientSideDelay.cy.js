describe("Client Side Delay Test", () => {
  it("waits for an element to show up and clicks", () => {
    cy.visit("http://uitestingplayground.com/clientdelay");
    cy.get("#ajaxButton").click();
    cy.get(".bg-success", { timeout: 20000 }).contains("Data calculated on the client side.").click();
  });
});

