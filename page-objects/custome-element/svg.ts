import { By } from "selenium-webdriver";
import { BaseElement } from "../../framework/elements/base-element";

export class SvgElement extends BaseElement {
    get pathElement() {
        return this.waitUntilExists().findElement(By.css('path'));
    }
}