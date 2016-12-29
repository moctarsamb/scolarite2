import {Component} from "@angular/core"
import {Router} from "@angular/router"
@Component({
    template : `
        <h2 class="text-center router container">
            Cette Page n'existe pas
            <button (click)="gohome()" class="btn btn-success">
                Retour à la Page d'acceuil
            </button>
        </h2> 
    `
})

export class PageNotFoundComponent {
    constructor(private _router : Router){

    }

    gohome(){
        this._router.navigate([""])
    }
}