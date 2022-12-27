import { By } from 'selenium-webdriver';
import { SvgElement } from '../custome-element/svg';
import { BaseYandPage } from "./BaseYandPage";

export class ResultsPage extends BaseYandPage {
    public readonly resultCard = new SvgElement(By.css('li.serp-item_card'), 'Yandex card');
}
