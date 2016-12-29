import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeUserComponent }   from './homeuser.component';
import { HomeUserRouting } from './homeuser.routing'
import { inscriptionManComponent }   from './inscription/inscription.component';
import { ListeEtuComponent }   from './liste_etu/listeetu.component';
import {tri_attribute} from "./liste_etu/Pipes/column.pipe"
import {acdc} from "./liste_etu/Pipes/acdc.pipe"



@NgModule({
    imports: [FormsModule, BrowserModule],
    exports: [],
    declarations: [HomeUserComponent,inscriptionManComponent,ListeEtuComponent,tri_attribute,acdc],
    providers: []
})
export class HomeUserModule { }