import { ConfigReader } from './../helpers/config-reader';
import { By } from "selenium-webdriver";
import { DriverManager } from "../helpers/driver-manager";

export class BasePage {
    private get driver() { return DriverManager.driver };

    constructor(pageSelector: By) {
        this.waitForPageLoad(pageSelector);
    }

    public waitForPageLoad(pageSelector: By) {
        const recurcy = () => {
            this.driver.findElements(pageSelector).then(els => {
                if(els.length === 0) setTimeout(() => recurcy(), new ConfigReader().getProperty('timeouts.pageLoadDelay'))
            })
        }
    }
}