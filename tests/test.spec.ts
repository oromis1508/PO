import { Button } from './../framework/elements/button';
import { DriverManager } from './../framework/helpers/driver-manager';
import { BrowserHelper } from './../framework/helpers/browser';
import { PageFactory } from '../page-objects/page-factory/page-factory';
import { Browser, Builder, By, Condition, Key, until, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';
import * as fs from 'fs';
import { Page } from '../page-objects/page-factory/pages';
import { BaseElement } from '../framework/elements/base-element';

describe('login features', () => {
    beforeEach(async () => {
        await BrowserHelper.goTo('https://catalog.onliner.by/boardgame')
    });

    afterEach(async () => {
        await BrowserHelper.close();
    });

    test('Page Objects', async () => {
        // const mainPage = PageFactory.getPage(Page.main);
        const btn = new Button(By.xpath("//span[contains(@class, 'schema-filter') and normalize-space()='логическая']"), 'kosh');
        await btn.click()
        await btn.click()
        // const el = driver.findElement(By.css('.search3__input'));
        // await el.click();
        // await mainPage.searchTextField.click();
        // await mainPage.searchTextField.typeText('Automation' + Key.ENTER);
        // await el.sendKeys('Automation' + Key.ENTER);
        // const condition = new Condition('10 els', driver => driver.findElements(By.css('li.serp-item_card')).then(els => els.length === 10))
        // expect(await BaseElement.getElementsCount(PageFactory.getPage(Page.results).resultCard)).toBe(13)
    })
})
