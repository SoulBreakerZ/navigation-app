import { ModalPage } from './../modal/modal';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl:ModalController) {
  }

  public activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  public mostrarModal(){
    let modal = this.modalCtrl.create(ModalPage,{nombre:"Reimy",edad:27});
    modal.present();
    modal.onDidDismiss(parametros=>{
      console.log("Data del modal de respuesta");
      console.log( parametros ? parametros: "Sin parametros" );
    });
  }

}
