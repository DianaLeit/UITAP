describe("Progress Bar Test", () => {
  it("clicks Start button and clicks Stop when the progress bar reaches 75%", () => {
    cy.visit("http://uitestingplayground.com/progressbar");
    cy.get("#startButton").click();
    cy.get("#progressBar").contains("[aria-valuenow]", "75", { timeout: 50000 });
    cy.get("#stopButton").click();
    cy.get("#result").should("contain", "Result: 0");
  });
});
cy.waitUntil()
