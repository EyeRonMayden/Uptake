'use strict';

var HomePage = function () {
    this.url = ('https://uptake.com');

    this.get = function(){
        return browser.get(this.url);
    }
    
    this.fullPage = element(by.id('home'));
    this.header = element(by.id('header'));
    this.footer = element(by.id('footer'));
    this.aboutLink = element.all(by.css('[href="/about"]')).get(0); //gets the 1st about link on the page
    
};

module.exports = new HomePage();