import { Condition, until, WebElementPromise } from 'selenium-webdriver';
import { By, WebElement } from 'selenium-webdriver';
import { DriverManager } from '../helpers/driver-manager';

export abstract class BaseElement {
    protected get driver() { return DriverManager.driver };

    constructor(private readonly selector: By, public readonly name: string) {
    }

    protected waitUntilDisplayed() {
        return this.driver.wait(until.elementIsVisible(this.waitUntilExists()));
    }

    protected waitUntilExists() {
        return this.driver.wait(until.elementLocated(this.selector));
    }

    protected waitUntilEnabled() {
        return this.driver.wait(until.elementIsEnabled(this.waitUntilDisplayed()));
    }

    public waitUntilText(text: string) {
        this.element.getAttribute('innerHtml');
        const condition = new Condition(`Until text is ${text}`, () => {
            return this.waitUntilDisplayed().getText().then(t => t === text)
        });
        
        return this.driver.wait(condition);
    }

    protected get element() {
        return this.driver.findElement(this.selector);
    }

    public isVisible() {
        return this.element.isDisplayed();
    }

    public async scrollIntoView(): Promise<WebElement> {
        this.element.getAttribute
        return this.driver.executeScript("arguments[0].scrollIntoView(true); return arguments[0];",
             await this.waitUntilEnabled())
    }

    public async click() {
        try {
            return (await this.scrollIntoView()).click();
        } catch (err) {
            if(err.message.toLowerCase().includes('stale')) {
                this.click();
            }
        }

        // return this.waitUntilEnabled().click();
    }

    public async rightClick() {
        return this.driver.actions().contextClick(await this.waitUntilEnabled()).perform();
    }

    public async hover() {
        const coords = await this.waitUntilEnabled().getRect();
        return this.driver.actions().move(coords).perform();
    }

    public getAttribute(attributeName: string) {
        return this.waitUntilDisplayed().getAttribute(attributeName);
    }

    public static getElementsCount(element: BaseElement) {
        return element.driver.findElements(element.selector)
            .then(async els => {
                const arr: WebElement[] = [];
                for (const el of els) {
                    if(await el.isDisplayed()) arr.push(el);
                }
                return arr.length;
            });
    }
}