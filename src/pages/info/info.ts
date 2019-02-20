import { Component, Provider } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  video = {};
  imgs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.video = this.navParams.get('video');

    if (this.video.ad.hasOwnProperty('images')) {
      this.imgs = this.video.ad.images;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  favoritos(video)
  {
    this.fav.addFavoritos(video);
  }

}
