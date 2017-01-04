import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../http.Service";
import {BrowserModule} from "@angular/platform-browser"
@Component({
        moduleId: module.id,
    templateUrl: '/app/templates/homeuser.html',
    providers: [HttpService]
})
export class HomeUserComponent implements OnInit {
    username : string ;
    administre : boolean = false
    //775878961
    constructor( private _route : Router, private  _httpser : HttpService) { 
            this.checklogin()

    }

    ngOnInit() { 
    }

    checklogin(){
        var login = JSON.parse(localStorage.getItem("login"));
        if(!login){
            this._route.navigate(["login"])
        }
        else{            
            this._httpser.checkloginto(login.userId,login.id).subscribe(
                data => this.handle(data),
                error => this.handleerror(error)
            )
     }
    }
    handle(parameter: any){
            this.username = parameter.username;
            let on = localStorage.getItem("admin")
            this.administre = (on == "true") ? true : false ;

    }
    handleerror(parameter:any){
            this._route.navigate(["login"])
    }

    goto (e : Event, parameter : any){
        e.preventDefault();
        this._route.navigate([parameter]);
        
    }
    
}