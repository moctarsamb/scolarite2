import { Component } from '@angular/core';
import {HttpService} from "../../http.Service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router"
import {Etudiant as ModelEtudiant} from "../../models/etudiant"

@Component({
    moduleId: module.id,
    templateUrl : "/app/templates/etudiant/inscription-form.html",
    providers : [HttpService]
})
export class inscriptionManComponent { 
     x =new Date();
     displayloading = true ;
     nodisplayerr = true ;
     etudiant = new ModelEtudiant() ;

    listac: any[]= []; 
    constructor(private _http : HttpService,private _route : Router){
  
        for (let i=0 ; i< 100; i ++){
            let a  = this.x.getFullYear() - i ;
            if(a==2000){
                break;
            }
            let Objecttoput  =  {"value" : ""} ;
            let b : string ;
            b = a + "/" + (a+1);
              Objecttoput.value = b;
           this.listac.push(Objecttoput)
        }
        
    }
    registeretu(e : Event){
        e.preventDefault();
        this._http.createEtudiant(this.etudiant).subscribe(
            data => this.handle(data),
            error => this.handleerror(error)
        )

        }
        handle(parameter: any) {
            console.log(parameter)
            this._route.navigate(["listeetu"])
        }
        handleerror(parameter: any){
            console.log(parameter)
        }
    }

