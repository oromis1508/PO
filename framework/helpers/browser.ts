import { DriverManager } from './driver-manager';
import { WebElementPromise } from "selenium-webdriver";

export class BrowserHelper {
    // private static driver = DriverManager.driver;

    private static get driver() { return DriverManager.driver };

    public static close() {
        return this.driver.quit();
    }

    public static closeTab() {
        return this.driver.close();
    }

    public static switchToMain() {
        return this.driver.switchTo().defaultContent();
    }

    public static async switchToFrame(element: WebElementPromise) {
        await this.driver.switchTo().frame(await element);
    }

    public static goTo(url: string) {
        return this.driver.get(url)
    }
}