import { Component } from '@angular/core';

import { AjustesPage } from './../ajustes/ajustes';
import { PrincipalPage } from './../principal/principal';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  public tab1: any;
  public tab2: any;

  constructor() {
    this.tab1 = PrincipalPage;
    this.tab2 = AjustesPage;
  }
}
