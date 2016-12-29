import {Pipe, PipeTransform} from "@angular/core";
import {Etudiant as ModelEtudiant} from "../../../models/etudiant"

@Pipe({
    name : "adcd"
})

export class acdc implements PipeTransform {
    transform(value : Array<ModelEtudiant>,attribute : string): Array<ModelEtudiant>{
        if (!value){
            return ;
        }
        else if (attribute=="dc"){
            let _return : ModelEtudiant[] = [

            ]
            for(let i = 0; i<value.length ; i ++){
                let j = value.length - (i+1) ;
                _return[i] = value[j];
            }
            value = _return
            return value;
        } 
        else {
            return value;
        }

    }
}
