const { driver } = require('../pages/RostPage');
const { By, until } = require('selenium-webdriver');
const rostSiteUrl = 'https://welltour.by/tours/?';

async function waitCityInput() {
    return driver.wait(until.elementLocated(By.css('body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(1) > div > div > ul > li:nth-child(8)')));
}
async function waitCountryInput() {
    return driver.wait(until.elementLocated(By.css('body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(2) > div > div > ul > li:nth-child(3)')));
}
async function waitZvezdaInput() {
    return driver.wait(until.elementLocated(By.css('body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(2) > div:nth-child(3) > div > section > div > article > p:nth-child(3) > label')));
}
async function waitFind() {
    return driver.wait(until.elementLocated(By.css('body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-right > input')));
}
async function waitSear() {
    return driver.wait(until.elementLocated(By.css('body > div.wrapper.lazyload > section > div.ng-scope > div.search')));
}
module.exports = {
    waitCityInput,
    waitCountryInput,
    waitZvezdaInput,
    waitFind,
    waitSear,
    rostSiteUrl
};
