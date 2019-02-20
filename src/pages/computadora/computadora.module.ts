import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComputadoraPage } from './computadora';

@NgModule({
  declarations: [
    ComputadoraPage,
  ],
  imports: [
    IonicPageModule.forChild(ComputadoraPage),
  ],
})
export class ComputadoraPageModule {}
