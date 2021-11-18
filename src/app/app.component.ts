import { ComponentDeco } from "./helpers/component.deco";
import * as someTextContent from './app.component.txt';

@ComponentDeco({
    template: '<h1>Hello World!</h1>',
    templateUrl: someTextContent.default
})
export class AppComponent {
    constructor() {
        const rootEle = document.getElementById('root');
        rootEle.innerHTML=`${this['html']}`;
    }
}
