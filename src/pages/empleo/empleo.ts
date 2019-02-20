import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {
  empleos = [];
  info = InfoPage;
  search = InfoPage
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
      .subscribe(data => {
        //console.log(JSON.stringify(data));
        if (data.hasOwnProperty('list_ads')) {
          this.empleos = data.list_ads;
        }
      },
        error => {
          console.log(JSON.stringify(error));
        });
  }
  informacion3(empleo) {
    this.navCtrl.push(this.info, {video:empleo});
  }
  buscar() {
    this.navCtrl.push(this.search, {videos: this.empleos});
  }
}