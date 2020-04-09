import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  @Output('headerPageControl') headerPageControl = new EventEmitter<string>();

  collapsed = true;
    constructor() { }

    selectPage(pageName: string){
    this.headerPageControl.emit(pageName);
    }

    ngOnInit() { }
}
