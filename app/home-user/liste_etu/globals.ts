import {HttpService} from '../../http.service';
import {Etudiant as ModelEtudiant} from "../../models/etudiant"

let a ;

function az() : any {
    let http : HttpService;
    this.http.getEtudiants.subscrib(
        data => ()=> this.a = data,
        error => console.log(error)
    )
}

export var zz = a ;