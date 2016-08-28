import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AlertComponent, BUTTON_DIRECTIVES, DROPDOWN_DIRECTIVES, BarComponent, PROGRESSBAR_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import { HeaderService } from './header.service';

@Component({
    selector: 'appHeader',
    templateUrl: 'app/layout/header.component.html',

    directives: [AlertComponent, BarComponent, BUTTON_DIRECTIVES, DROPDOWN_DIRECTIVES],
    providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
    @Output() selected = new EventEmitter<String>();

    categories = [''];

    constructor(private hs: HeaderService) {}
    
    ngOnInit() {
        this.categories = this.hs.getCategories();
    }

}