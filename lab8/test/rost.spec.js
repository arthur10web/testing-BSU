const {rostPage}= require('../pages/RostPage');
const assert = require('assert');
const { driver } = require('../pages/RostPage');
const { rostSiteUrl } = require('../utils/rost.util');
const { waitCityInput,waitCountryInput,waitZvezdaInput,waitFind,waitSear} = require('../utils/rost.util');


describe('Test kpas site', function () {

  beforeEach(function () {
    rostPage.goToRostSite(rostSiteUrl);
  });

  /*afterEach(async function () {
      driver && driver.quit();
  });
*/
  it('Search race at a bargain price', async function() {
    rostPage.chooseCityInput()
    await waitCityInput()

    rostPage.chooseCity()
    rostPage.chooseCountry()
    await waitCountryInput()
    rostPage.chooseCountryWhere()
    rostPage.chooseHotel()
    await waitZvezdaInput()
    rostPage.chooseZvezda()
    await waitFind()
    rostPage.chooseFind()
    await waitSear()
    const city = await rostPage.cittyText()
   const country = await rostPage.counttryText()
   const zvezda = await rostPage.zvezddaText()

 assert.ok(city==="Рига" && country ==="Болгария" && zvezda==="3*")

  })
})
