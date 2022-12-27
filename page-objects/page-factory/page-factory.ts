import { ResultsPage } from './../pages/results-page';
import { MainPage } from './../pages/main-page';
import { Page } from './pages';

export class PageFactory {
    public static getPage(pageName: Page.results): ResultsPage;
    public static getPage(pageName: Page.main): MainPage;
    public static getPage(pageName: Page): MainPage | ResultsPage {
        switch (pageName) {
            case Page.main:
                return new MainPage();
            case Page.results: 
                return new ResultsPage();
            default:
                throw new Error(`Page factory is not implemented for ${pageName} `)
                break;
        }
    }
}