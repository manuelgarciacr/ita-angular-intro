import { Component } from '@angular/core';
import * as phrasesJSON from'../../assets/phrases.json';

@Component({
    selector: 'app-home',
    template: `
        <app-scene [phrases]="phrasesArr"/>
    `,
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
   protected phrasesArr: string[];

    constructor() {
        this.phrasesArr = Array.from(phrasesJSON);
    }
 
}
