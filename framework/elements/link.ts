import { BaseElement } from "./base-element";

export class Link extends BaseElement {
    get href() {
        return this.getAttribute('href');
    }
}