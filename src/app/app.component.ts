import { Component } from '@angular/core';

@Component({    
    selector: 'app-root',
    template: `
        <div class="container-fluid">
            <app-home class="row vh-100"/>
        </div>
    `
})
export class AppComponent {
    title = 'ita-angular-intro';
}
