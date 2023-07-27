import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-scene',
    template: `
        <p *ngFor="let phrase of phrases">{{ phrase }}</p>
    `,
    styleUrls: ['./scene.component.scss']
})
export class SceneComponent {
    @Input() phrases: string[] = [];

}
