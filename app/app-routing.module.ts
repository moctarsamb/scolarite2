import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component"
import {PageNotFoundComponent} from './PageNotFound.Component';
import {HomeUserComponent} from "./home-user/homeuser.component"
import { inscriptionManComponent }   from './home-user/inscription/inscription.component';
import { ListeEtuComponent }   from './home-user/liste_etu/listeetu.component';

const appRoutes: Routes = [
    {
    path: "",
    component : HomeComponent
}, 
{
    path: "homeuser",
    component : HomeUserComponent
},
{
    path: "inscriptionman",
    component : inscriptionManComponent
},
{
    path: "listeetu",
    component : ListeEtuComponent
},
    {
    path: "**",
    component : PageNotFoundComponent
}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
