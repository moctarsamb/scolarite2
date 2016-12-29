import {Component} from "@angular/core"
import {Haut} from "./haut.directive"
import {Bas} from "./bas.directive"
@Component({
    selector : 'my-app',
    template : `
    <haut> </haut>
    <router-outlet class="router">
    </router-outlet>
    <bas> </bas>
    `,
entryComponents : [Haut,Bas]
    })

export class IndexComponent {

}