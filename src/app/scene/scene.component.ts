import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-scene',
    template: `
        <p *ngFor="let phrase of phrases" 
            class="text-center border border-black rounded-pill border-2 p-2 mx-5 mt-2">
            {{ phrase }}
        </p>
    `,
    styleUrls: ['./scene.component.scss']
})
export class SceneComponent {
    @Input() phrases: string[] = [];

}
