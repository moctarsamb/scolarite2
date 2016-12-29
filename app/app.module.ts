import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

//Personel
import {IndexComponent} from "./index.component"
import {HomeComponent} from "./home.component"
import {PageNotFoundComponent} from "./PageNotFound.Component"
import {Haut} from "./haut.directive"
import {Bas} from "./bas.directive"
import {LoginModule} from "./login/login.module"
import {AppRoutingModule} from "./app-routing.module"
import {HomeUserModule} from "./home-user/homeuser.module"

 
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule,JsonpModule,LoginModule, AppRoutingModule , HomeUserModule ],
  declarations: [ HomeComponent,IndexComponent ,PageNotFoundComponent, Haut, Bas],
  bootstrap:    [ IndexComponent ]
})
export class AppModule { }
