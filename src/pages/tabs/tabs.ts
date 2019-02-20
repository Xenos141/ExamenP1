import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleoPage } from '../empleo/empleo';
import { HomePage } from '../home/home';
import { ComputadoraPage } from '../computadora/computadora';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1=HomePage;
  tab2=EmpleoPage;
  tab3=ComputadoraPage
  tab4 = FavoritosPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
