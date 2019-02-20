import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { InfoPage } from '../pages/info/info';
import { Provider } from '../providers/provider/provider';
import { ComputadoraPage } from '../pages/computadora/computadora';
import { EmpleoPage } from '../pages/empleo/empleo';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosProvider } from '../providers/favoritos/favoritos';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { BuscarPage } from '../pages/buscar/buscar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    ComputadoraPage,
    EmpleoPage,
    TabsPage,
    FavoritosPage,
    BuscarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    ComputadoraPage,
    EmpleoPage,
    TabsPage,
    FavoritosPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider,
    FavoritosProvider
  ]
})
export class AppModule {}
