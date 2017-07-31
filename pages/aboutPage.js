'use strict';

var AboutPage = function () {
    this.url = ('https://uptake.com/about');

    this.get = function(){
        return browser.get(this.url);
    }
    
    this.fullPage = element(by.id('about'));

};

module.exports = new AboutPage();