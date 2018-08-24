import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public nombre:string ="";
  public edad:number=0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
      this.nombre = this.navParams.get('nombre');
      this.edad = this.navParams.get('edad');
      console.log(this.nombre);
      console.log(this.edad);
  }

  public cerrarConParametros(){
    let data = {
      nombre:"mario",
      edad:32,
      coords:{
        lat:10,
        lon:-10
      }
    }
    this.viewCtrl.dismiss(data);
  }

  public cerrarSinParametros(){
    this.viewCtrl.dismiss();
  }
}
