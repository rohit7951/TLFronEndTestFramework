const { Given, When, Then} = require('@cucumber/cucumber');
var assert = require('assert');

var CardsPage = require('./support/page-object/CardsPage');

Given(/^I am on a bank card web page$/, function () {
    browser.url('http://localhost:3000/');
    browser.pause(3000);
    let url = browser.getUrl();
    assert.strictEqual(url, 'http://localhost:3000/', 'Wrong PageURL')
    let title = browser.getTitle()
    assert.strictEqual(title, 'Cards', 'Wrong PageTitle')
    let expectedText = 'Please submit your application to check new cards eligibility';
    let actualText = CardsPage.initialText.getText();
    assert.strictEqual(expectedText, actualText, 'Wrong Page')
});

When(/^I enter (.*) (.*) (.*)$/, function (username,email,address) {
    CardsPage.fillForm(username,email,address);
});

When(/^I submit the details$/, function () {
    CardsPage.submitForm.click();
    browser.pause(3000);
});

Then(/^I should see the eligible cards for (.*)$/, function (username) {
    CardsPage.validateCards(username);
});  

When (/^I click on submit with empty (.*)$/, function (fields) {
    CardsPage.emptyFields(fields);
    CardsPage.submitForm.click();
});

Then (/^I should get (.*)$/, function (errormessage) {
    let actualText = CardsPage.emptyfieldsErrMsg.getText();
    assert.strictEqual(errormessage, actualText, 'Unexpected error message displayed');
});   