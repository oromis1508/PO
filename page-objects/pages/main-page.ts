import { Link } from './../../framework/elements/link';
import { Button } from './../../framework/elements/button';
import { BrowserHelper } from './../../framework/helpers/browser';
import { By } from 'selenium-webdriver';
import { TextField } from '../../framework/elements/textfield';
import { BaseYandPage } from "./BaseYandPage";

export class MainPage extends BaseYandPage {
    public readonly plusButton = new Button()
    public readonly installLink = new Link()
}

