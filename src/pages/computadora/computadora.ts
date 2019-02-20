import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the ComputadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-computadora',
  templateUrl: 'computadora.html',
})
export class ComputadoraPage {
  computadoras = [];
  info = InfoPage;
  search = BuscarPage
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
      .subscribe(data => {
        //console.log(JSON.stringify(data));
        if (data.hasOwnProperty('list_ads')) {
          this.computadoras = data.list_ads;
        }
      },
        error => {
          console.log(JSON.stringify(error));
        });
  }
  informacion2(computadora) {
    this.navCtrl.push(this.info, {video:computadora});
  }
  buscar() {
    this.navCtrl.push(this.search, {videos: this.computadoras});
  }
}