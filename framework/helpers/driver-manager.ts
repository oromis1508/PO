import { Browser, Builder, ThenableWebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';
import { ConfigReader } from "./config-reader";

export class DriverManager {
    private static driverInstance: ThenableWebDriver;
    private static driverConfig = new ConfigReader();
    
    public static get driver() {
        if(!this.driverInstance) {
            const service = new chrome.ServiceBuilder(path);
            this.driverInstance = new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
            this.driverInstance.manage().setTimeouts(this.driverConfig.getProperty('timeouts'));
            if(this.driverConfig.getProperty('isMaximize')) this.driverInstance.manage().window().maximize();
            // return this.driverInstance ?? (this.driverInstance = new Builder().forBrowser(Browser.CHROME).setChromeService(new chrome.ServiceBuilder(path)).build());
        }
        return this.driverInstance;
    }
    
}