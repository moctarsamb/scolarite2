import { Component } from '@angular/core';
import { Utilisateur } from '../models/Utilisateur';
import { FormsModule }   from '@angular/forms';
import {HttpService} from "../http.Service";
import { Router }   from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl : "../templates/login.html",
    providers : [HttpService]
})
export class LoginComponent { 
        creditantials : any ;
        nodisplayerr : boolean ;
        result : Utilisateur ;
        errortext : string;
        displayloading : boolean ;
        constructor(private _httpser : HttpService, private _route : Router){
            this.creditantials = new Utilisateur()
            this.nodisplayerr = true ;
            this.displayloading = true ;
            };
        checklogin(_event : Event){

        _event.preventDefault();
        this.displayloading = false;
          let i =  JSON.stringify(this.creditantials);
            console.log(i)
            this._httpser.logininto(i).subscribe(
                data => this.handle(data),
                error => this.handleerror(error)
            )

    }
    handle(parameter: any){
        if (parameter.length == 0 ){
            console.log("None")
            this.result = new Utilisateur()
        }
        else{
            this.displayloading = true
            /*
            * Prendre le token et mettre dans le localstorage
            * Prendre en compte le statut 
            */
            localStorage.setItem("login",JSON.stringify(parameter))
            if(this.creditantials.username == "admin"){
            localStorage.setItem("admin",'true')
            }
            else{
            localStorage.setItem("admin",'false')
            }
            // Changement Route
            this._route.navigate(["/homeuser"])
        }
    }
    handleerror(parameter: any){
        if (parameter.status == 401){
            this.nodisplayerr = false ; 
            this.errortext = "Mauvaise combinaison Login / Mot de Passe";
            setTimeout(()=>{this.nodisplayerr = true}, 2500)
            this.displayloading = true
        }
        if (parameter.status == 400){
              setTimeout(()=>{this.displayloading = true}, 2500)  
             this.nodisplayerr = false ; 
            this.errortext = "Mauvaise combinaison Login / Mot de Passe";
            setTimeout(()=>{this.nodisplayerr = true}, 2500)
                
        }
        if (parameter.status == 0) {
                this.displayloading = true
                this.errortext= "Probleme au niveau du serveur d'authentification, Le serveur est surement hors ligne";
                setTimeout(()=>{this.nodisplayerr = true}, 2500)
        }
    }
}