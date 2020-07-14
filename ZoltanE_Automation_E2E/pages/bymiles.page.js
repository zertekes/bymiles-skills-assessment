class ByMiles {

    get cookieButton() {return $('.button--cookie')}
    get registration() {return $('.formbox input')}
    get quickQuoteButton() {return $('.formbox button')}
    get vehicleInfo() {return $('.formbox__vehicle-info h5')}
    get mileage() {return $('.formbox__estimated-mileage-wrapper input')}
    get continueButton() {return $('.quick-quote__form-wrapper div:nth-child(2) div:nth-child(3) div')}
    get noClaimText() {return $('.form__question')}

    get noClaimDropDown() {return $('.Select-control')}
    get noClaimOptions() {return $('.Select-input')}
    get noClaimInput() {return $('.Select-value-label')}

    get ageTextField() {return $('#age input')}
    get additionalDriverLink() {return $('.form__option-link')}
    get driver1TextField() {return $('.form__additionals-wrap div:nth-child(1) input')}

    get postcodeTextField() {return $('#postcode input')}

    get renewalDropDown() {return $('#quick-quote-form div:nth-child(1) div:nth-child(7) div')}
    get renewalText() {return $('#react-select-renewal_month--value-item')}

    get parkingSecretly() {return $('#quick-quote-form div:nth-child(2) .text')}
    get quoteButton() {return $('#quick-quote-form button')}
    get estimateQuote() {return $('.estimated-price-wrapper h2')}

    acceptCookies() {
        this.cookieButton.waitForDisplayed()
        this.cookieButton.click()
    };
    enterRegistration(reg) {
        this.registration.waitForDisplayed();
        this.registration.setValue(reg);
    };

    clickQuickQuoteButton() {
        this.quickQuoteButton.waitForDisplayed();
        this.quickQuoteButton.click();
    };

    enterMileage(miles) {
        this.mileage.waitForDisplayed();
        this.mileage.setValue(miles);
    };

    clickOutFromMileage() {
        this.vehicleInfo.click()
    };

    clickContinue() {
        this.continueButton.waitForDisplayed();
        this.continueButton.click()
    };

    clickNoClaimDropDown() {
        this.noClaimDropDown.waitForDisplayed();
        this.noClaimDropDown.click();
    };

    selectNoClaimOption() {
        this.noClaimOptions.keys("ArrowDown");
        this.noClaimOptions.keys("Enter");
    };

    enterAge(age) {
        this.ageTextField.waitForDisplayed();
        this.ageTextField.setValue(age);
    };

    clickAdditionalDriverLink() {
        this.additionalDriverLink.waitForDisplayed();
        this.additionalDriverLink.click();
    };

    enterDriver1Age(driver1) {
        this.driver1TextField.waitForDisplayed();
        this.driver1TextField.setValue(driver1);
    };

    enterPostcode(postcode) {
        this.postcodeTextField.waitForDisplayed();
        this.postcodeTextField.setValue(postcode);
    };

    selectRenewalDate() {
        this.renewalDropDown.waitForDisplayed();
        this.renewalDropDown.click();
        this.renewalDropDown.keys("ArrowDown");
        this.renewalDropDown.keys("Enter");

    };

    dragAndPark() {
        this.parkingSecretly.waitForDisplayed();
        this.parkingSecretly.doubleClick();        
    };

    clickQuoteButton() {
        this.quoteButton.waitForDisplayed();
        this.quoteButton.click();
    };

};

module.exports = new ByMiles();
