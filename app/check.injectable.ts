import { Injectable }     from '@angular/core';
import {Router} from "@angular/router";
import {Http, Headers, RequestOptions} from "@angular/http"
import './rxjs-operators';
@Injectable()
export class CheckLog{
        api_url = "http://localhost:3010/api"

    constructor(private _http : Http, private _route: Router){

    }
    checkLogin(){
      var login = JSON.parse(localStorage.getItem("login"));
        if(!login){
            this._route.navigate(["login"])
        }
        else{            
           return this._http.get(this.api_url+"/utilisateurs/"+login.userId+"?access_token="+login.id)
            .map((response) => response.json()).subscribe(
                data => this.handle(data),
                error => this.handleerror(error)
            )
     }    
    }
      handle(parameter: any){
        
    }
    handleerror(parameter:any){
            this._route.navigate(["login"])
    }
}