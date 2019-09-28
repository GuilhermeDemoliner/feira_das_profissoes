import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'feiraDasProfissoes';

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'map-pointer',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/map_pointer.svg'));
        iconRegistry.addSvgIcon(
            'student-hat',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/student_hat.svg'));
        iconRegistry.addSvgIcon(
            'map',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/map_simple.svg'));
        iconRegistry.addSvgIcon(
            'clock',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/clock.svg'));
    }
}
