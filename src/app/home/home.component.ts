import { Component } from '@angular/core';
import * as phrasesJSON from'../../assets/phrases.json';

@Component({
    selector: 'app-home',
    template: `
        <app-scene *ngIf="started; else landing" [phrases]="phrasesArr"/>
        <ng-template #landing>
            <div class="d-flex justify-content-center align-items-center">
                <button class="btn btn-primary bg-gradient col-8 col-md-6 col-lg-4"
                    (click)="start()">Començar</button>
            </div>
        </ng-template>
    `
})
export class HomeComponent {
    protected started = false;
    protected phrasesArr: string[] = [];

    constructor() {
        this.phrasesArr = Array.from(phrasesJSON);
    }
 
    protected start = () => this.started = true;
}
