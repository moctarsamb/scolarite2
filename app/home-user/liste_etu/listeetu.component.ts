import { Component,Directive,  OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import {Etudiant as ModelEtudiant} from "../../models/etudiant"
import {Router} from "@angular/router"
import {StatsComponent} from "./statliste.component"
import {Chart} from 'chart.js/chart.js'
import {CheckLog} from '../../check.injectable'

@Component({
    moduleId: module.id,
    templateUrl: '/app/templates/etudiant/listeetu.html',
    providers : [HttpService,CheckLog],
    entryComponents : [StatsComponent]
})
export class ListeEtuComponent implements OnInit {
    touchedfilter : boolean
    alletudiants : Array<ModelEtudiant> 
    filter : String = "numetu"
    order : String = "ac"
    rows : Array<ModelEtudiant> ;
    columns : any ;
    etudiant : ModelEtudiant
    displayfilter : boolean  ;
    displaystats : boolean ;
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
    constructor(private _httpser : HttpService,private _route : Router, private checklogin : CheckLog) {
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
      this.checklogin.checkLogin()
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
   this.displaystats = false
   this.touchedfilter = false
 }
  filtration(e: Event){
    e.preventDefault()
    this.displaystats = false
    if(this.etou == "et"){
        this.filtrat()
    }
    else{
      this.filtratou;
    }
    this.touchedfilter = true ;
  }
    filtrat(){
    this.rows = this.alletudiants
    var filtereddata : Array<ModelEtudiant> = [];
    let inf : Boolean = false
    if(this.checknom){
      inf = true ;
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.nom.toLowerCase().includes(this.etudiant.nom.toLowerCase())){
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
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].prenom.toLowerCase().includes(this.etudiant.prenom.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            console.log(filtereddata)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.prenom.toLowerCase().includes(this.etudiant.prenom.toLowerCase())){
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
            let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].numcin.toLowerCase().includes(this.etudiant.numcin.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            console.log(filtereddata)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.numcin.toLowerCase().includes(this.etudiant.numcin.toLowerCase())){
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
            let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].ddn.toString().slice(0,10).toLowerCase().includes(this.etudiant.ddn.toString().toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            console.log(filtereddata)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {   
            if(row.ddn.toString().slice(0,10).toLowerCase().includes(this.etudiant.ddn.toString().toLowerCase() )){
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
         let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].departement.toLowerCase().includes(this.etudiant.departement.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            console.log(filtereddata)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.departement.toLowerCase().includes(this.etudiant.departement.toLowerCase())){
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
           let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].etat.toLowerCase().includes(this.etudiant.etat.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.etat.toLowerCase().includes(this.etudiant.etat.toLowerCase())){
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
              let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].formation.toLowerCase().includes(this.etudiant.formation.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.formation.toLowerCase().includes(this.etudiant.formation.toLowerCase())){
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
              let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].ldn.toLowerCase().includes(this.etudiant.ldn.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.ldn.toLowerCase().includes(this.etudiant.ldn.toLowerCase())){
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
                let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].natureforma.toLowerCase().includes(this.etudiant.natureforma.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.natureforma.toLowerCase().includes(this.etudiant.natureforma.toLowerCase())){
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
                let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].niveau.toLowerCase().includes(this.etudiant.niveau.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.niveau.toLowerCase().includes(this.etudiant.niveau.toLowerCase())){
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
               let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].option.toLowerCase().includes(this.etudiant.option.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.option.toLowerCase().includes(this.etudiant.option.toLowerCase())){
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
                let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].numetu.toLowerCase().includes(this.etudiant.numetu.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.numetu.toLowerCase().includes(this.etudiant.numetu.toLowerCase())){
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
               let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].anneeac.toLowerCase().includes(this.etudiant.anneeac.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.anneeac.toLowerCase().includes(this.etudiant.anneeac.toLowerCase())){
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
              let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].numtel.toLowerCase().includes(this.etudiant.numtel.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.numtel.toLowerCase().includes(this.etudiant.numtel.toLowerCase())){
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
               let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].sexe.toLowerCase().includes(this.etudiant.sexe.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.sexe.toLowerCase().includes(this.etudiant.sexe.toLowerCase())){
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
              let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].seriebac.toLowerCase().includes(this.etudiant.seriebac.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.seriebac.toLowerCase().includes(this.etudiant.seriebac.toLowerCase())){
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
               let counta : number = 0 ;
                  var temp  = filtereddata.length;
                  var asupprim :any[] =  []
                  let i : number = 0 ;

     do{
            if(!filtereddata[i].resultat.toLowerCase().includes(this.etudiant.resultat.toLowerCase()) ){
            asupprim.push(filtereddata.indexOf(filtereddata[i]))
            }
            i = i + 1 ;
        }while( i < temp)
        asupprim.forEach((supp : any) => {
            filtereddata.splice(supp-counta,1)
            counta = counta + 1 
        })
      }
      else{
        inf = true ;
          this.rows.forEach((row : ModelEtudiant) => {
            if(row.resultat.toLowerCase().includes(this.etudiant.resultat.toLowerCase())){
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
      if(row.nom.toLowerCase().includes(this.etudiant.nom)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkprenom){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.prenom.toLowerCase().includes(this.etudiant.prenom)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkcin){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.numcin.toLowerCase().includes(this.etudiant.numcin)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkddn){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.ddn.toString().slice(0,10).toLowerCase().includes(this.etudiant.ddn.toString())){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkdep){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.departement.toLowerCase().includes(this.etudiant.departement)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checketat){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.etat.toLowerCase().includes(this.etudiant.etat)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkforma){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.formation.toLowerCase().includes(this.etudiant.formation)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkldn){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.ldn.toLowerCase().includes(this.etudiant.ldn)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checknatforma){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.natureforma.toLowerCase().includes(this.etudiant.natureforma)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkniv){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.niveau.toLowerCase().includes(this.etudiant.niveau)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkopt){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.option.toLowerCase().includes(this.etudiant.option)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checknumetu){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.numetu.toLowerCase().includes(this.etudiant.numetu)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkannee){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.anneeac.toLowerCase().includes(this.etudiant.anneeac)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checktel){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.numtel.toLowerCase().includes(this.etudiant.numtel)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checksexe){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.sexe.toLowerCase().includes(this.etudiant.sexe)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkserbac){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.seriebac.toLowerCase().includes(this.etudiant.seriebac)){
             filtereddata.push(row)
          }
      }); 
    }
    if(this.checkres){
      this.rows.forEach((row : ModelEtudiant) => {
          if(row.resultat.toLowerCase().includes(this.etudiant.resultat)){
             filtereddata.push(row)
          }
      }); 
    }
 
    this.rows = filtereddata ;
  } 
} 

