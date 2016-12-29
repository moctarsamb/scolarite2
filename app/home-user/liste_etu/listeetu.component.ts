import { Component,Directive,  OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Etudiant as ModelEtudiant} from "../../models/etudiant"
import {Router} from "@angular/router"


@Component({
    moduleId: module.id,
    templateUrl: '/app/templates/etudiant/listeetu.html',
    providers : [HttpService],
})
export class ListeEtuComponent implements OnInit {
    alletudiants : Array<ModelEtudiant> 
    filter : String = "numetu"
    order : String = "ac"
    rows : Array<ModelEtudiant> ;
    columns : any ;
    etudiant : ModelEtudiant
    displayfilter : boolean  ;
    checknom : Boolean = false ;
    checkprenom : Boolean = false ;
    checkddn : Boolean = false ;
    checkldn : Boolean = false ;
    checkcin : Boolean = false ;
    checktel : Boolean = false ;
    checkserbac : Boolean = false ;
    checkdep : Boolean = false ;
    checkforma : Boolean = false ;
    checkopt : Boolean = false ;
    checksexe : Boolean = false ;
    checkniv : Boolean = false ;
    checknumetu : Boolean = false ;
    checknatforma : Boolean = false ;
    checkannee : Boolean = false ;
    checketat : Boolean = false ;
    checkres : Boolean = false ;
     listac : any [] = [] ; 
   etou = "et"
    constructor(private _httpser : HttpService,private _route : Router) {
      let x =new Date();

     for (let i=0 ; i< 100; i ++){
            let a  = x.getFullYear() - i ;
            if(a==2000){
                break;
            }
            let Objecttoput  =  {"value" : ""} ;
            let b : string ;
            b = a + "/" + (a+1);
              Objecttoput.value = b;
           this.listac.push(Objecttoput)
        }
      this.getalletudiants()
      this.etudiant = new ModelEtudiant()
     }
     ngOnInit(){

     }

    goto (e : Event, parameter : any){
        e.preventDefault();
        this._route.navigate([parameter]);
        
    }
    getalletudiants(){
        this._httpser.getEtudiants().subscribe(
            data =>  this.handle(data) ,
            error => this.handleerror(error)
        )
    }
    handle(parameter : any){
       this.alletudiants = parameter ;
       this.rows = parameter

    }
    handleerror(parameter : any){
        console.log("Erreur")
    }
    changetri_attribute(parameter : any){
     this.filter = parameter;
     if (this.order == "ac"){
         this.order = "dc"
     }
     else{
         this.order = "ac"
     }   
 }  
 reset(e : Event){
   e.preventDefault()
   this.getalletudiants()
 }
  filtration(e: Event){
    e.preventDefault()
    if(this.etou == "et"){
        this.filtrat()
    }
    else{
      this.filtratou;
    }
  }
    filtrat(){
    this.rows = this.alletudiants
    let filtereddata : Array<ModelEtudiant> = [];
    let inf : Boolean = false
    if(this.checknom){
      inf = true ;
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.nom.includes(this.etudiant.nom)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkprenom){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
                  let counta : number = 0 ;
                  let temp : ModelEtudiant[] = filtereddata
                  console.log(temp.length)
                  let i : number = 0 ;
     do{
          console.log("OUI")
            if(!temp[i].prenom.includes(this.etudiant.prenom) ){
              console.log(filtereddata)
               filtereddata.splice(filtereddata.indexOf(temp[i])-counta,1);
                console.log(filtereddata);
            }
            i = i + 1 ;
            console.log(i)
        }while(i  > temp.length)
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.prenom.includes(this.etudiant.prenom)){
            filtereddata.push(row)
          }
      }); 
      }
    
    }
    if(this.checkcin){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.numcin.includes(this.etudiant.numcin) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.numcin.includes(this.etudiant.numcin)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkddn){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if( filtered.ddn.toString().slice(0,10) != this.etudiant.ddn.toString() ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {   
            if(row.ddn.toString().slice(0,10).includes(this.etudiant.ddn.toString() )){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkdep){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.departement.includes(this.etudiant.departement) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.departement.includes(this.etudiant.departement)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checketat){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.etat.includes(this.etudiant.etat) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.etat.includes(this.etudiant.etat)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkforma){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.formation.includes(this.etudiant.formation) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.formation.includes(this.etudiant.formation)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkldn){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.ldn.includes(this.etudiant.ldn) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.ldn.includes(this.etudiant.ldn)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checknatforma){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.natureforma.includes(this.etudiant.natureforma) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.natureforma.includes(this.etudiant.natureforma)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkniv){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.niveau.includes(this.etudiant.niveau) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.niveau.includes(this.etudiant.niveau)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkopt){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.option.includes(this.etudiant.option) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.option.includes(this.etudiant.option)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checknumetu){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.numetu.includes(this.etudiant.numetu) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.numetu.includes(this.etudiant.numetu)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkannee){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.anneeac.includes(this.etudiant.anneeac) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.anneeac.includes(this.etudiant.anneeac)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checktel){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.numtel.includes(this.etudiant.numtel) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.numtel.includes(this.etudiant.numtel)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checksexe){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.sexe.includes(this.etudiant.sexe) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.sexe.includes(this.etudiant.sexe)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkserbac){
       if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.seriebac.includes(this.etudiant.seriebac) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.seriebac.includes(this.etudiant.seriebac)){
            filtereddata.push(row)
          }
      }); 
      }
    }
    if(this.checkres){
      if(inf && filtereddata.length == 0){
        this.rows = []
        return ;
      }
      else if(filtereddata.length > 0){
        filtereddata.forEach((filtered : ModelEtudiant) => {
          inf = true
            if(!filtered.resultat.includes(this.etudiant.resultat) ){
                filtereddata.splice(filtereddata.indexOf(filtered),1);
            }
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.resultat.includes(this.etudiant.resultat)){
            filtereddata.push(row)
          }
      }); 
      }
    }
 
    this.rows = filtereddata ;
  } 


  // OU
   filtratou(){
    this.rows = this.alletudiants
    let filtereddata : Array<ModelEtudiant> = [];
    if(this.checknom){
      this.rows.forEach((row : ModelEtudiant) => {
      if(row.nom.includes(this.etudiant.nom)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkprenom){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.prenom.includes(this.etudiant.prenom)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkcin){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.numcin.includes(this.etudiant.numcin)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkddn){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.ddn.toString().slice(0,10).includes(this.etudiant.ddn.toString())){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkdep){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.departement.includes(this.etudiant.departement)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checketat){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.etat.includes(this.etudiant.etat)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkforma){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.formation.includes(this.etudiant.formation)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkldn){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.ldn.includes(this.etudiant.ldn)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checknatforma){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.natureforma.includes(this.etudiant.natureforma)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkniv){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.niveau.includes(this.etudiant.niveau)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkopt){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.option.includes(this.etudiant.option)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checknumetu){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.numetu.includes(this.etudiant.numetu)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkannee){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.anneeac.includes(this.etudiant.anneeac)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checktel){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.numtel.includes(this.etudiant.numtel)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checksexe){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.sexe.includes(this.etudiant.sexe)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkserbac){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.seriebac.includes(this.etudiant.seriebac)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkres){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.resultat.includes(this.etudiant.resultat)){
             filtereddata.push(row)
          }
      }); 
    }
 
    this.rows = filtereddata ;
  } 
} 

