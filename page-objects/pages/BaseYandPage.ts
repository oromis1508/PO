import { BasePage } from './../../framework/base/base-page';
import { DriverManager } from './../../framework/helpers/driver-manager';
import { By } from "selenium-webdriver";
import { TextField } from "../../framework/elements/textfield";


export class BaseYandPage extends BasePage {
    public readonly searchTextField = new TextField(By.css('input[id*=uniq], .search3__input'), 'Search');
}
