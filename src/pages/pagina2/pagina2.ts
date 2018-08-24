import { MUTANTES } from './../../data/data.villanos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../index.pages';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes:any = MUTANTES;
  pagina3:any = Pagina3Page;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public irPagina3(mutante:any){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page,{'mutante':mutante});
  }
  
}
