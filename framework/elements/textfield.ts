import { BaseElement } from "./base-element";

export class TextField extends BaseElement {
    public typeText(text: string) {
        return this.element.sendKeys(text);
    }

    public async clearAndType(text: string) {
        await this.element.clear();
        await this.typeText(text);
    }

    public async getValue(): Promise<string> {
        return this.driver.executeScript('return arguments[0].value', await this.element);
    }
}