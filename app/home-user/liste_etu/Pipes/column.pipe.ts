import { Pipe, PipeTransform } from '@angular/core';
import {Etudiant as ModelEtudiant} from "../../../models/etudiant"

/*
 
*/
@Pipe({name: 'tri_attribute',
pure: false
})
export class tri_attribute implements PipeTransform {
  
  transform(value, attribute: string): Array<ModelEtudiant> {
      if(!value){
        return
      }
      if (attribute == "numetu"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.numetu < b.numetu) {
        return -1;
      } else if (a.numetu > b.numetu) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
      else if (attribute == "prenom"){
       value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.prenom < b.prenom) {
        return -1;
      } else if (a.prenom > b.prenom) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
       else if (attribute == "nom"){
          value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.nom < b.nom) {
        return -1;
      } else if (a.nom > b.nom) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
       else if (attribute == "ddn"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.ddn < b.ddn) {
        return -1;
      } else if (a.ddn > b.ddn) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
       else if (attribute == "ldn"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.ldn < b.ldn) {
        return -1;
      } else if (a.ldn > b.ldn) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
       else if (attribute == "numcin"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.numcin < b.numcin) {
        return -1;
      } else if (a.numcin > b.numcin) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
       else if (attribute == "numtel"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.numtel < b.numtel) {
        return -1;
      } else if (a.numtel > b.numtel) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "seriebac"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.seriebac < b.seriebac) {
        return -1;
      } else if (a.seriebac > b.seriebac) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "departement"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.departement < b.departement) {
        return -1;
      } else if (a.departement > b.departement) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "formation"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.formation < b.formation) {
        return -1;
      } else if (a.formation > b.formation) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "option"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.option < b.option) {
        return -1;
      } else if (a.option > b.option) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "sexe"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.sexe < b.sexe) {
        return -1;
      } else if (a.sexe > b.sexe) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "niveau"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.niveau < b.niveau) {
        return -1;
      } else if (a.niveau > b.niveau) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "natureforma"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.natureforma < b.natureforma) {
        return -1;
      } else if (a.natureforma > b.natureforma) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "anneeac"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.anneeac < b.anneeac) {
        return -1;
      } else if (a.anneeac > b.anneeac) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "resultat"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.resultat < b.resultat) {
        return -1;
      } else if (a.resultat > b.resultat) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      } else if (attribute == "etat"){
      value.sort((a: ModelEtudiant, b: ModelEtudiant) => {
      if (a.etat < b.etat) {
        return -1;
      } else if (a.etat > b.etat) {
        return 1;
      } else {
        return 0;
      }
    });
    return value
      }
   
  }
}