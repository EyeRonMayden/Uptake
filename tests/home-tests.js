'use strict';

let homePage = require('../pages/homePage.js');
let aboutPage = require('../pages/aboutPage.js');

var driver = browser.driver;

exports.verfyHomePageLoads = function() {
homePage.get(); 

expect(driver.getCurrentUrl()).toMatch(homePage.url);
expect(homePage.fullPage.isDisplayed()).toBeTruthy();
expect(homePage.header.isDisplayed()).toBeTruthy();
expect(homePage.footer.isDisplayed()).toBeTruthy();

};

exports.verfyAboutPageLoads = function() {
homePage.get();

var EC = protractor.ExpectedConditions;

browser.wait(EC.presenceOf(homePage.aboutLink), 5000); //wait for about link to load

homePage.aboutLink.click();

browser.wait(EC.presenceOf(aboutPage.fullPage), 5000);

expect(driver.getCurrentUrl()).toMatch(aboutPage.url);
expect(aboutPage.fullPage.isDisplayed()).toBeTruthy();

};