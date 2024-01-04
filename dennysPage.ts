import { By } from 'selenium-webdriver';
import {BasePage} from './basePage';
const fs = require('fs');
export class dennysPage extends BasePage {
    menu: By = By.xpath('//span[@class="link-title"]');
    //Locating the menu tab
    locations: By = By.xpath('(//a[text()="Locations"])[1]');
    //locating the locations tab
    rewards: By = By.xpath('(//a[text()="Rewards"])[1]'); 
    //locating the rewards tab
    aboutUs: By = By.xpath('(//button[text()=" About Us "])[1]');
    //locating the about us tab

    familyPack: By = By.xpath('//a[@id="menu-family pack"]');
    //reviewing the family pack menu
    starters: By = By.xpath('//a[@id="menu-starters"]');
    //reviewing the starters menu
    salads: By = By.xpath('//a[@id="menu-salads"]');
    //reviewing the salads menu
    burgers: By = By.xpath('//a[@id="menu-burgers"]');
    //reviewing the burgers menu
    kids: By = By.xpath('//a[@id="menu-kids"]');
    //reviewing the kids menu
    
    beverages: By = By.xpath('//a[@id="menu-beverages"]');
    //Locating the beverages menu
    searchItem: By = By.xpath('//input[@id="menu-filter-desktop"]');
    //Locating the search bar

    dinerDrip: By = By.xpath('(//span[text()="Diner Drip"])[1]');
    //locating the diner drip tab
    hats: By = By.xpath('(//a[@class="full-unstyled-link"])[4]');
    //locating the hats page
    fluffyBucket: By = By.xpath('(//a[@class="full-unstyled-link"])[2]');
    //viewing the fluffy bucket hat

    constructor() {
        super({url:'https://www.dennys.com/'})
    }; 
    async search(searchThing: string) {
        return this.setInput(this.searchItem, `${searchThing}\n`);
    }; 
    async getResults() {
        return this.getText(this.fluffyBucket)
    }; 
};