describe('homepage - ', function() {
    var homeTests = require('../tests/home-tests.js');
    
    beforeEach(function(){
        browser.ignoreSynchronization = true; //this is needed for testing a non angular page
    });
 
    it('should load', homeTests.verfyHomePageLoads); 

    it('should navigate to the about page', homeTests.verfyAboutPageLoads);
});