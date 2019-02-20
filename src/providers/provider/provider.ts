import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {
  favoritos = [];
  constructor(public toastCtrl: ToastController) {
    console.log('Hello Provider Provider');
  }
  addFavoritos(video) {
    this.favoritos.push(video)
    const toast = this.toastCtrl.create({
      message: 'Objeto agregado :)',
      duration: 3000
    });
    toast.present();
  }

  getFavoritos() {
    return this.favoritos;
  }
}

