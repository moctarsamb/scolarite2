import {Http, Headers, RequestOptions} from "@angular/http"
import { Injectable }     from '@angular/core';
import './rxjs-operators';
@Injectable()
export class HttpService {
    api_url = "http://localhost:3010/api"
    constructor(private _http : Http){

    }

    logininto(parameter : any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
        return this._http.post(this.api_url + '/utilisateurs/login',parameter,options)
            .map(response => response.json());
    }

    logoutinto(parameter : any){
         let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
        return this._http.post(this.api_url + '/utilisateur/logout',parameter,options)
            .map(response => response.json());
    }
    createEtudiant(parameter : any){
          let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
        return this._http.post(this.api_url + '/etudiants',parameter,options)
            .map(response => response.json());
    }  
    getEtudiants(){
        return this._http.get(this.api_url + "/etudiants/").map(res => res.json())
    }  
    checkloginto(id:any,token : any){
        
        return this._http.get(this.api_url+"/utilisateurs/"+id+"?access_token="+token)
            .map((response) => response.json());
    }

}
