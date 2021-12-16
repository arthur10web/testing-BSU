const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
// chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
// chromeOptions.addArguments("--headless");
// chromeOptions.addArguments("--no-sandbox");
// chromeOptions.addArguments("--disable-dev-shm-usage");
const { By } = webdriver;
const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

class RostPage {
  
 cityInput="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(1) > div"
  vilnus="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(1) > div > div > ul > li:nth-child(8)"
  egipet="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(2) > div > a"
 bolgaria="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(2) > div > div > ul > li:nth-child(3)"
 hotelInput="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(2) > div:nth-child(3) > div > span"
 zvezda="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-left > div:nth-child(2) > div:nth-child(3) > div > section > div > article > p:nth-child(3) > label"
 find="body > div.wrapper.lazyload > section > div.ng-scope > div.search > form > div.tour-search-right > input"
 citty="body > div.wrapper.lazyload > section > div.margin-block.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(1) > div > a > span"
 counttry="body > div.wrapper.lazyload > section > div.margin-block.ng-scope > div.search > form > div.tour-search-left > div:nth-child(1) > div:nth-child(2) > div > a > span"
 zvezzda="body > div.wrapper.lazyload > section > div.margin-block.ng-scope > div.search > form > div.tour-search-left > div:nth-child(2) > div:nth-child(3) > div > span > label"
 
 goToRostSite(theURL){
  driver.get(theURL);
    return this

}

 chooseCityInput(){
  driver.findElement(By.css(this.cityInput)).click()
  return this
 }

 chooseCity(){
  driver.findElement(By.css(this.vilnus)).click()
  return this
 }
chooseCountry(){
  driver.findElement(By.css(this.egipet)).click()
  return this
}
chooseCountryWhere(){
  driver.findElement(By.css(this.bolgaria)).click()
  return this
}
 chooseHotel(){
   driver.findElement(By.css(this.hotelInput)).click()
  return this
 }
 chooseZvezda(){
  driver.findElement(By.css(this.zvezda)).click()
 return this
}
 chooseFind(){
  driver.findElement(By.css(this.find)).click()
 return this
}
async cittyText() {
  const resp = await driver.findElement(By.css(this.citty))
   return resp.getText()
}
async counttryText() {
    const resp = await driver.findElement(By.css(this.counttry))
    return resp.getText()
}
async zvezddaText() {
    const resp = await driver.findElement(By.css(this.zvezzda))
    return resp.getText()
}
}

const rostPage=new RostPage()

module.exports = {
  rostPage,
  driver
};
