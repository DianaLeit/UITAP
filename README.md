# UITAP

Here lie my Cypress solutions for [UI Test Automation Playground](http://uitestingplayground.com). Of course it should be a Component Testing, not E2E. But since code is located on servers UITAP we can't build components separately.

And quering elements here is not the best practice, because I can't add attributes to elements like data-cy, data-test, etc. here.

Feel free to constructive critique, I'm learning and don't know how it is made in real working process. Help me to understand this =)

[**ajaxData.cy.js**](cypress/e2e/ajaxData.cy.js)<br>
The element appears on a page after processing of an AJAX request to a web server.<br>
Test waits AJAX request to process, then clicks on label text.

[**classAtribute.cy.js**](cypress/e2e/classAtribute.cy.js)<br>
Class attribute of the element contains more than one class reference.<br>
Test identifies the primary (blue) button using btn-primary class and clicks on it.

[**click.cy.js**](cypress/e2e/click.cy.js)<br>
Event based click does not work.<br>
Test emulates physical mouse click.<br>
_Didn't understand this task, should I also click on green button or not? Otherwise it's too simple_

[**clientSideDelay.cy.js**](cypress/e2e/clientSideDelay.cy.js)<br>
The element appears on a page after JS processing on a client side.<br>
Test waits for the element to show up.

[**dynamicID.cy.js**](cypress/e2e/dynamicID.cy.js)<br>
In case of generated dynamic ID for elements in application it is not reliable to use such ID in element selector. That creates flaky tests.<br> 
_Task:_ skip dynamic IDs when XPath (CSS selectors in Cypress) is generated for an element.<br>
Test clicks on button with dynamic ID.

[**dynamicTable.cy.js**](cypress/e2e/dynamicTable.cy.js)<br>
Columns and rows change their position upon page reload creating Dynamic Table.<br>
Test should get a value of CPU load for Chrome process and compare it with value on label.

[**hiddenLayers.cy.js**](cypress/e2e/hiddenLayers.cy.js)<br>
The button is present in the DOM tree but overlapped with another element.<br>
Test duplicates the button click, green button doesn`t hit twice.

[**loadDelay.cy.js**](cypress/e2e/loadDelay.cy.js)<br>
The page has a load delay.<br>
Test waits for a page to load.

[**mouseOver.cy.js**](cypress/e2e/mouseOver.cy.js)<br>
Mouse over an element replaces it in the DOM tree.<br>
Test clicks on active link 2 times and checks number of clicks on label.

[**nonBreakingSpace.cy.js**](cypress/e2e/nonBreakingSpace.cy.js)<br>
Non-breaking space has no visual difference on screen. It may lead to confusion when building XPath<br>
But there`s no such problem in Cypress. 
Test searches for an element by its text with non-breaking space.

[**overlappedElement.cy.js**](cypress/e2e/overlappedElement.cy.js)<br>
Entering text to the element requires scrolling it into view.<br>
Test scrolls to the input 'name' and enters text in it.

[**progressBar.cy.js**](cypress/e2e/progressBar.cy.js)<br>
Result should be equal 0.<br>
Test clicks Start button, waits for the progress bar to reach 75%, then clicks Stop.<br>
_The test is flaky in case of progress bar speed is higher than execution of Cypress commands_

[**sampleApp.cy.js**](cypress/e2e/sampleApp.cy.js)<br>
Standard login form.<br>
Test logs in and checks that status contains proper text.

[**scrollbars.cy.js**](cypress/e2e/scrollbars.cy.js)<br>
Button element is out of view.<br>
Test scrolls the button into a visible area and clicks it.

[**shadowDOM.cy.js**](cypress/e2e/shadowDOM.cy.js)<br>
Page contains a Shadow DOM component guid-generator.<br>
Test compares the value from the clipboard with the value of the input field.<br>
_BUT it works only after test reload: document loses focus. There is a solution of this using cy.realClick(), but it is still not a proper fix and the root cause of the problem needs to be addressed by the Cypress itself.<br>IMPORTANT: I used https instead of original http here because navigator.clipboard requires a secure origin_

[**textInput.cy.js**](cypress/e2e/textInput.cy.js)<br>
Entered text should emulate sending DOM events to the button element.<br>
Test types text in input and checks that it changes the button name.

[**verifyText.cy.js**](cypress/e2e/verifyText.cy.js)<br>
Test finds the label element with Welcome text.
_Probably I didn't understand it right_

[**visibility.cy.js**](cypress/e2e/visibility.cy.js)<br>
Buttons on the page are removed | have zero height or width | covered by another element |
hidden using styles | moved offscreen.<br>
Test clicks Hide button and determines that other buttons invisible.
_I've decided to determine if other buttons visible by making assertions of their invisibility.<br>And there are multiple solutions for some cases, I did it for educational purposes to learn different approaches to elements_
