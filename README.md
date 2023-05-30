Here lie my Cypress solutions for [UI Test Automation Playground](http://uitestingplayground.com). Of course it should be a Component Testing, not E2E. But since code is located on servers UITAP we can\`t build components separately.
_Maybe I\`m not right, this is how I understand this on the moment. Feel free to constructive critique, I\`m learning and don\`t know how it is made in real working process. Help me to understand this =\)_
And quering elements here is not the best practice, because I can`t add attributes to elements like data-cy, data-test, etc. here.

[**ajaxData.cy.js**](cypress/e2e/ajaxData.cy.js)
The element appears on a page after processing of an AJAX request to a web server.
Test waits AJAX request to process, then clicks on label text.

[**classAtribute.cy.js**](cypress/e2e/classAtribute.cy.js)
Class attribute of the element contains more than one class reference.
Test identifies the primary (blue) button using btn-primary class and clicks on it.

[**click.cy.js**](cypress/e2e/click.cy.js)
Event based click does not work.
Test emulates physical mouse click
_Didn\`t understand this task, should I also click on green button or not? Otherwise it\`s too simple_

[**clientSideDelay.cy.js**](cypress/e2e/clientSideDelay.cy.js)
The element appears on a page after JS processing on a client side.
Test waits for the element to show up.

[**dynamicID.cy.js**](cypress/e2e/dynamicID.cy.js)
In case of generated dynamic ID for elements in application it is not reliable to use such ID in element selector. That creates flaky tests. _Task:_ skip dynamic IDs when XPath (CSS selectors in Cypress) is generated for an element.
Test clicks on button with dynamic ID.

[**progressBar.cy.js**](cypress/e2e/progressBar.cy.js)
Result should be equal 0.
Test clicks Start button, waits for the progress bar to reach 75%, then clicks Stop.
_Using click, contains, click creates flaky test in case of progress bar speed is higher than execution of Cypress commands_
