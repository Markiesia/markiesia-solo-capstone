import { By } from 'selenium-webdriver';
import {BasePage} from './basePage';
const fs = require('fs');
export class markiesiaSoloPage extends BasePage {
    women: By = By.xpath('//li[@class="js-nav-link-container nav-link-container nav-link-container-women d-flex flex-column flex-lg-row align-items-stretch has-menu"]');
    //Locating the womens tab
    geometricClog: By = By.xpath('//div[@class="ok-card"]')[1];
    //locating the classic geometric clog shoe
    addFav: By = By.xpath('.wishlist-heart__img')[3]; 
    //locating the add favorites button
    favBtn: By = By.xpath(('.wishlist-heart__img')[1]);
    //locating the favorites page
    trashFav: By = By.xpath(('.wishlist-remove-button'));
    //Trashing the item from the favorites
    removeBtn: By = By.xpath('//button[@type="button"]')[22];
    //Removing the trashed item from favorites

    storeLocator: By = By.css('#search-location');
    //Locating the store locator page
    useLocation: By = By.css('#current-location-detector');
    //Using the current location option
    locationChoice: By = By.css('#conv-section-store-200822');
    //Selecting the first location on the list

    selectSize: By = By.xpath('//div[@size-id="M5W7"]')[0];
    //Selecting the shoe size
    addCart: By = By.xpath('//button[@class="product-add-btn product-cta-btn js-product-cta-btn ok-button w-100"]')[0];
    //Adding the item to the cart
    clickCart: By = By.xpath('//span[@class="symbolset text-black"]')[1];
    //Locating the cart page
    removeCart: By = By.xpath(('//li[@class="d-inline"]')[0]);
    //Removing the item from the cart

    searchItem: By = By.xpath('//div[@class="cx-control-contents"]')[1];
    //Locating the search bar
    classic: By = By.xpath('//li[@class="searchSuggestion sel"]')[0];
    //Clicking the typed results
    selectCroc: By = By.xpath('//div[@class="ok-card__image-wrap"]')[0];
    //Selecting the chosen crocs

    continueShop: By = By.xpath('//div[@class="cx_col-12 cx_col-md-3 text-left"]')[0];
    //Returning to the continue shopping page

    constructor() {
        super({url:'https://www.crocs.com/'})
    }; 
    async search(searchThing: string) {
        return this.setInput(this.searchItem, `${searchThing}\n`);
    }; 
};