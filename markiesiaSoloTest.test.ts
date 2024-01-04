import { markiesiaSoloPage } from "./markiesiaSoloPage";
const page = new markiesiaSoloPage()

const fs = require('fs')

test('add item to favorites and remove from favorites', async () => {
    await page.navigate()
    await page.driver.manage().window().maximize()
    await page.driver.sleep(3000)
    await page.click(page.women);
    await page.click(page.geometricClog);
    await page.click(page.addFav);
    await page.click(page.favBtn);
    await page.click(page.trashFav);
    await page.click(page.removeBtn);
})
test('store locator', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.storeLocator);
    await page.click(page.useLocation);
    await page.click(page.locationChoice);
})
test('add item to cart and remove from cart', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.women);
    await page.click(page.geometricClog);
    await page.click(page.selectSize);
    await page.click(page.addCart);
    await page.click(page.clickCart);
    await page.click(page.removeCart);
})
test('search for item', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.searchItem);
    await page.search('classic');
    await page.click(page.classic);
    await page.click(page.selectCroc);
})
test('view wish list and continue shopping', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.favBtn);
    await page.click(page.continueShop);
    await page.driver.quit();   
});