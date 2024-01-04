import { dennysPage } from "./dennysPage";
const page = new dennysPage()

const fs = require('fs')

test('header tabs', async () => {
    await page.navigate()
    await page.driver.manage().window().maximize()
    await page.driver.sleep(3000)
    await page.click(page.menu);
    await page.driver.sleep(3000)
    await page.click(page.locations);
    await page.click(page.rewards);
    await page.driver.sleep(1000)
    await page.click(page.aboutUs);
})
test('menu categories', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.menu);
    await page.click(page.familyPack);
    await page.driver.sleep(1000)
    await page.click(page.starters);
    await page.click(page.salads);
    await page.driver.sleep(1000)
    await page.click(page.burgers);
    await page.click(page.kids);
})
test('search for milk', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.menu);
    await page.click(page.beverages);
    await page.click(page.searchItem);
    await page.driver.sleep(1000)
    await page.search('milk');
})
test('diner drip', async () => {
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.dinerDrip);
    await page.click(page.hats);
    await page.click(page.fluffyBucket);
    let text = await page.getResults(); 
    await fs.writeFile(`${__dirname}/dennys.png`,
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('dennys solo project')
    }); 
    fs.writeFile(`${__dirname}/dennysTest.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('save succesful')
    });
    await page.driver.quit();   
});