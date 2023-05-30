describe("Shadow DOM Test", () => {
  it("compares the value from the clipboard with the value of the input field", () => {
    cy.visit("https://uitestingplayground.com/shadowdom");
    cy.get("guid-generator").shadow().find("#buttonGenerate").click();
    cy.get("guid-generator").shadow().find("#buttonCopy").click();
    const copied = cy.get("guid-generator").shadow().find("#editField").invoke("val");
    //window() lets access to the page that we are testing
    cy.window()
      .then((win) => win.navigator.clipboard.readText())
      .then((text) => {
        copied.should("equal", text);
      });
  });
});
