import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule }   from '@angular/router';
import { HomeUserComponent }   from './homeuser.component';

const homeuserRoutes : Routes = [

]
@NgModule({
    imports: [BrowserModule,RouterModule.forChild(homeuserRoutes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class HomeUserRouting { }
