var assert = require('assert');

class CardsPage {

    get initialText() {
        return $('div:nth-child(2) div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-pFZIQ.bJTiKE > h1.sc-jSgupP.jHxEWL');
    }

    get usernameInput() {
        return $('#name');
    }

    get emailInput() {
        return $('#email');
    }

    get addressInput() {
        return $('#address');
    }

    fillForm(username, email, address) {
        this.usernameInput.setValue(username);
        this.emailInput.setValue(email);
        this.addressInput.setValue(address);
    }

    get submitForm() {
        return $('div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-iBPRYJ.SKzPa form:nth-child(2) div.sc-hKgILt.kbSNba:nth-child(5) > button.sc-eCssSg.iqUpdk');
    }

    get submitText() {
        return $('div:nth-child(2) div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-pFZIQ.bJTiKE > h1.sc-jSgupP.jHxEWL');
    }               

    get emptyfieldsErrMsg() {
        return $('div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-iBPRYJ.SKzPa form:nth-child(2) > h3.sc-gKsewC.hMBcXX:nth-child(4)');
    }


    emptyFields(fields) {
        switch (fields) {
            case 'all':
                break;
            case 'emailaddr':
                this.usernameInput.setValue('username');
                break;
            case 'nameaddr':
                this.emailInput.setValue('email@email.com');
                break;
            case 'nameemail':
                this.addressInput.setValue('address');
                break;
            case 'name':
                this.emailInput.setValue('email@email.com');
                this.addressInput.setValue('address');
                break;
            case 'email':
                this.usernameInput.setValue('username');
                this.addressInput.setValue('address');
                break;
            case 'addr':
                this.usernameInput.setValue('username');
                this.emailInput.setValue('email@email.com');
                break;
        }

    }

    validateCards(username) {
        let card, actualCard, expectedCard, expectedText, actualText;
        switch (username) {
            case 'Boris':
            case 'Theresa':
                expectedText = 'Thanks for submitting your application, you are eligible for this cards:';
                actualText = this.submitText.getText();
                assert.strictEqual(expectedText, actualText, 'Expected text is not matching');

                card = $('div:nth-child(2) div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-pFZIQ.bJTiKE > div.sc-fubCfw.ibmTIR');
                actualCard = card.getText();
                if (username == 'Boris') {
                    expectedCard = 'C1';
                }
                else if (username == 'Theresa') {
                    expectedCard = 'C2';
                }
                assert.strictEqual(expectedCard, actualCard, 'Expected card is not matching');
                break;
            case 'Angela':
                expectedText = 'Thanks for submitting your application, you are eligible for this cards:';
                actualText = this.submitText.getText();
                assert.strictEqual(expectedText, actualText, 'Expected text is not matching');

                let Card1 = $('div:nth-child(2) div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-pFZIQ.bJTiKE > div.sc-fubCfw.ibmTIR:nth-child(2)');
                let Card2 = $('div:nth-child(2) div.sc-jrAGrp.DelaZ div.sc-bdfBwQ.uuLqi div.sc-pFZIQ.bJTiKE > div.sc-fubCfw.ibmTIR:nth-child(3)');
                let actualCard1 = Card1.getText();
                let actualCard2 = Card2.getText();
                let expectedCard1 = 'C1';
                let expectedCard2 = 'C2';
                assert.strictEqual(expectedCard1, actualCard1, 'Expected card is not matching');
                assert.strictEqual(expectedCard2, actualCard2, 'Expected card is not matching');
                break;
            default:
                expectedText = "Unfortunately you're not eligible for any cards";
                actualText = this.submitText.getText();
                assert.strictEqual(expectedText, actualText, 'Expected text is not matching');
        }
    }

}
module.exports = new CardsPage();