import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HomeUserComponent }   from './homeuser.component';
import { HomeUserRouting } from './homeuser.routing'
import { inscriptionManComponent }   from './inscription/inscription.component';
import { ListeEtuComponent }   from './liste_etu/listeetu.component';
import {tri_attribute} from "./liste_etu/Pipes/column.pipe"
import {acdc} from "./liste_etu/Pipes/acdc.pipe"
import {StatsComponent} from "./liste_etu/statliste.component"
import { ChartsModule } from 'ng2-charts/ng2-charts';



@NgModule({
    imports: [FormsModule, BrowserModule, ChartsModule, HttpModule ],
    exports: [],
    declarations: [HomeUserComponent,inscriptionManComponent,ListeEtuComponent,tri_attribute,acdc, StatsComponent],
    providers: []
})
export class HomeUserModule { }