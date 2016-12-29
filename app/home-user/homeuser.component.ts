import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser"
@Component({
        moduleId: module.id,
    templateUrl: '/app/templates/homeuser.html'
})
export class HomeUserComponent implements OnInit {
    constructor(private _route : Router) { 

    }

    ngOnInit() { }

    goto (e : Event, parameter : any){
        e.preventDefault();
        this._route.navigate([parameter]);
        
    }
    
}