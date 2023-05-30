describe("Shadow DOM Test", () => {
  it("compares the value from the clipboard with the value of the input field", () => {
    cy.visit("https://uitestingplayground.com/shadowdom");
    cy.get("guid-generator").shadow().find("#buttonGenerate").click();
    cy.get("guid-generator").shadow().find("#buttonCopy").click();
    const copied = cy.get("guid-generator").shadow().find("#editField").invoke("val");
    //window() lets access to the page that we are testing
    //Cypress will wait for Promise to resolve,
    //and use the resolved value as the new subject to continue the chain of commands
    cy.window()
      .then((win) => win.navigator.clipboard.readText())
      .then((text) => {
        copied.should("equal", text);
      });
  });
});
