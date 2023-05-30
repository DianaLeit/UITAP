describe("Dynamic Table Test", () => {
  it("gets value of CPU load for Chrome process and compares it with value on label", () => {
    cy.visit("http://uitestingplayground.com/dynamictable");
    const labeltext = cy.get(".bg-warning");
    cy.contains("span", "Chrome")
      .parent()
      .within(() => {
        cy.contains("[role=cell]", "%")
          .invoke("text")
          .then((cctext) => {
            labeltext.should("contain", cctext);
          });
      });
  });
});
