const byMilesPage = require("../pages/bymiles.page")

describe('E2E test for get insurance quote: ', function() {
    it('It should accept cookies.', () => {
        browser.url('/')
        byMilesPage.acceptCookies()
        expect(byMilesPage.cookieButton.isDisplayed()).equals(false)
    }),
    it('It should enter a valid registration number.', () =>{
        byMilesPage.enterRegistration('RO60DPV')
        assert.equal('RO60DPV', byMilesPage.registration.getValue()) 
    }),
    it('It should click to the quick quote button.', () =>{
        byMilesPage.clickQuickQuoteButton();
        assert.equal('TOYOTA PRIUS T SPIRIT', byMilesPage.vehicleInfo.getText())
        
    }),
    it('It should enter a valid mileage.', () => {
        byMilesPage.enterMileage('4000');
        byMilesPage.clickOutFromMileage();
        assert.equal('4000', byMilesPage.mileage.getValue())
    }),
    it('It should click continue button.', () => {
        
        browser.waitUntil(() => {                         
            return (byMilesPage.continueButton.isExisting());       
           });
        byMilesPage.clickContinue();
        expect(byMilesPage.noClaimText.isDisplayed()).equals(true);
    }),
    it('It should select 1 years no-claims discount.', () => {
        byMilesPage.clickNoClaimDropDown();
        byMilesPage.selectNoClaimOption();
        assert.equal('1', byMilesPage.noClaimInput.getText())
        
    }),
    it('It should enter a valid age.', () => {
        byMilesPage.enterAge('32');
        assert.equal('32', byMilesPage.ageTextField.getValue());
    }),
    it('It should add additional driver and age.', () => {
        byMilesPage.clickAdditionalDriverLink();
        byMilesPage.enterDriver1Age('21');
        assert.equal('21', byMilesPage.driver1TextField.getValue());
    }),
    it('It should enter a valid postcode', () => {
        byMilesPage.enterPostcode('NW67EB')
        assert.equal('NW67EB', byMilesPage.postcodeTextField.getValue());
    }),
    it('It should add the renewal date.', () => {
        byMilesPage.selectRenewalDate();
        assert.equal("February", byMilesPage.renewalText.getText());
    }),
    it('It should drag the car into the circle', () => {
        byMilesPage.dragAndPark();
        assert.equal('PARKED!', byMilesPage.parkingSecretly.getText());
    }),
    it('It should get a quote.', () => {
        byMilesPage.clickQuoteButton();
        assert.equal('Your annual estimate is:', byMilesPage.estimateQuote.getText())
    })
})