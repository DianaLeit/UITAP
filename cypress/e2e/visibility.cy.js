describe("Visibility Test", () => {
  it("Clicks Hide button and determines that other buttons invisible", () => {
    cy.visit("http://uitestingplayground.com/visibility");
    cy.get("#hideButton").click();

    cy.get("#removedButton").should("not.exist");

    cy.get("#zeroWidthButton")
      .invoke("css", "width")
      .then((str) => parseInt(str))
      .should("equal", 0);
    //or:
    cy.get("#zeroWidthButton").should("not.be.visible");
    //or:
    cy.get("#zeroWidthButton").should("have.css", "width", "0px");

    /**
     * Returns true if two DOM rectangles are overlapping
     * @param {DOMRect} rect1 the bounding client rectangle of the first element
     * @param {DOMRect} rect2 the bounding client rectangle of the second element
     * @returns {boolean}
     */
    const isOverlapped = (rect1, rect2) => {
      // if one rectangle is on the left side of the other
      if (
        rect1.right < rect2.right &&
        rect1.left < rect2.left &&
        rect1.bottom < rect2.bottom &&
        rect1.top < rect2.top
      ) {
        return false;
      }
      // the rectangles must overlap
      return true;
    };
    //The method Element.getBoundingClientRect() returns a DOMRect object
    // providing information about the size of an element and its position relative to the viewport:
    const getRectangle = ($el) => $el[0].getBoundingClientRect();

    cy.get("#overlappedButton")
      .then(getRectangle)
      .then((button) => {
        cy.get("#hidingLayer")
          .then(getRectangle)
          .then((overlap) => {
            // now check if button is overlapped
            expect(isOverlapped(button, overlap), "button is covered by a layer?").to.be.true;
          });
      });

    cy.get("#transparentButton")
      .invoke("css", "opacity")
      .then((str) => parseInt(str))
      .should("equal", 0);
    //or:
    cy.get("#transparentButton").should("not.be.visible");

    cy.get("#invisibleButton").should("be.hidden");

    cy.get("#notdisplayedButton").should("have.css", "display", "none");
    //or:
    cy.get("#notdisplayedButton").should("not.be.visible");

    // Checks that button of any size is offscreen
    cy.get("#offscreenButton").then((els) => {
      const buttonBox = els[0].getBoundingClientRect();
      cy.get("#offscreenButton").invoke("css", "top").then(parseInt).should("lt", -buttonBox.height);
      cy.get("#offscreenButton").invoke("css", "left").then(parseInt).should("lt", -buttonBox.width);
    });
  });
});
