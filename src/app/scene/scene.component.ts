import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Scene } from '../home/home.component';

@Component({
    selector: 'app-scene',
    template: `
        <div class="p-2">
            <button (click)="prev()" [disabled]="btnDisabled"
                class="fs-4 mb-2 col-6 hr-6">
                Anterior
            </button>

            <button (click)="next()" [disabled]="btnDisabled"
                class="fs-4 mb-2 col-6 hr-6">
                Següent
            </button>

            <div class="px-6">
                <p *ngFor="let phrase of phrases; let i = index" 
                    class="text-center border border-black rounded-pill border-2 p-2 mt-2"
                    [class.active]="currentSentence == i">
                    {{ phrase.txt }}
                </p>
            </div>
        </div>
    `,
    styles: [':host {background-size: cover}']
})
export class SceneComponent implements OnInit{
    private lastSentence = -1; // Index. -1 if number of sentences is zero.
    protected currentSentence = 0;
    protected btnDisabled = false; // Number of sentences zero. Buttons are disabled.
    @Input() phrases: Scene[] = [];
    @HostBinding('style.background-image')
    backgroundImage = '';
    
    ngOnInit(): void {
        this.lastSentence = this.phrases.length - 1;

        if (this.lastSentence < 0)
            this.btnDisabled = true; // Buttons disabled
        else
            this.setImage();
    }

    protected prev = () => {
        this.currentSentence--;

        if (this.currentSentence < 0)
            this.currentSentence = this.lastSentence;

        this.setImage()
    }

    protected next = () => {
        this.currentSentence++;

        if (this.currentSentence > this.lastSentence)
            this.currentSentence = 0;

        this.setImage()
    }

    private setImage = () => {
        const img = this.phrases[this.currentSentence].img;
        
        this.backgroundImage = 'url("/assets/img/' + img + '")'
    }
}
