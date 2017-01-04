import { Component, Input , OnInit } from '@angular/core';
import {Etudiant as ModelEtudiant} from "../../models/etudiant"

@Component({
    moduleId: module.id,
    selector: 'stats',
    templateUrl: '/app/templates/etudiant/stats.html'
})
export class StatsComponent implements OnInit {
    @Input() rows: ModelEtudiant []
    @Input() all: ModelEtudiant 
    nbreF : number = 1;
    nbreM : number = 1;
    nbreInf : number =1;
    nbreGes : number=1;
    nbreCiv : number=1;
    nbreMeca : number=1;
    nbreGcba : number=1;
    nbreElec : number=1;
    constructor() { 

    }
    public piesexelabels : any [] = ["Masculin","Feminin"]
    public piesexedata : any [] = [this.nbreM,this.nbreM]
    public piedeplabels : any [] = ["Info","Meca","Civil","Élec","Gestion","GCBA"]
    public piedepdata : any [] = [this.nbreInf,this.nbreMeca,this.nbreCiv,this.nbreElec,this.nbreGes,this.nbreGcba]
    
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  calculSexe(){
    this.nbreF = 0
    this.nbreM = 0 
    this.rows.forEach((row : ModelEtudiant)=>{
      if(row.sexe == 'M'){
        this.nbreM++;
      }
      else{
        this.nbreF++

      }
    })
    var i = this.piesexedata.length
         this.piesexedata.splice(0,i)
         this.piesexedata.push(this.nbreM)
         this.piesexedata.push(this.nbreF)

  }
  calculDep(){
this.nbreInf = 0
this.nbreMeca = 0
this.nbreCiv = 0
this.nbreElec = 0
this.nbreGes = 0
this.nbreGcba = 0 ;
   this.rows.forEach((row : ModelEtudiant)=>{
      if(row.departement.includes("Inform")){
        this.nbreInf++;
        return ;
      }
       if (row.departement.includes("Mécanique")){
        this.nbreMeca++
return ;
      }  if (row.departement.includes("Electrique")){
        this.nbreElec++
return ;
      }  if (row.departement.includes("Gestion")){
        this.nbreGes++
return ;
      }  if (row.departement.includes("Civil")){
        this.nbreCiv++
return ;
      }  if (row.departement.includes("Chim")){
        this.nbreGcba++
        return ;
      }
    })
    var i = this.piedepdata.length
         this.piedepdata.splice(0,i)
         this.piedepdata.push(this.nbreInf)
         this.piedepdata.push(this.nbreMeca)
         this.piedepdata.push(this.nbreCiv)
         this.piedepdata.push(this.nbreElec)
         this.piedepdata.push(this.nbreGes)
         this.piedepdata.push(this.nbreGcba)
  }
  public pie = "pie"
    ngOnInit() {
        if(!this.rows){
        return ;
      }
      this.calculSexe()
      this.calculDep()
     }
}