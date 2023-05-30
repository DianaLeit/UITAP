describe("AJAX Data Test", () => {
  it("Presses the button and waits AJAX request to process, then clicks on text", () => {
    cy.visit("http://uitestingplayground.com/ajax");
    // Declare the AJAX request we will wait for
    cy.intercept("GET", "/ajaxdata").as("label");
    // Click the button and wait AJAX request to process
    cy.get("#ajaxButton").click().wait("@label");
    // Get the DOM element containing the text and click on text of the loaded label
    cy.get(".bg-success").contains("Data loaded with AJAX get request.").click();
  });
});
