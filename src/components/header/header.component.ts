import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public selected : string;
    constructor() {

        this.selected = '0'
    }

    ngOnInit() {
    }
    selectOption(option){
        this.selected = option
    }

}
