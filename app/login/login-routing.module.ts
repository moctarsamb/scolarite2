import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent }   from './login.component';
import {HomeUserComponent} from "../home-user/homeuser.component";

const loginRoutes : Routes = [
{
    path : "login",
    component : LoginComponent
}
]
@NgModule({
    imports: [BrowserModule,RouterModule.forChild(loginRoutes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class LoginRouting { }
