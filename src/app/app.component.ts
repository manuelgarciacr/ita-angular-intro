import { Component } from '@angular/core';

@Component({    
    selector: 'app-root',
    template: `
        <div class="container-fluid">
            <app-home class="row p-2"/>
        </div>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'ita-angular-intro';
}
