import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SensorsPage } from './sensors';


@NgModule({
  declarations: [
    SensorsPage,
  ],
  imports: [
    IonicPageModule.forChild(SensorsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SensorsPage
  ]
})
export class  SensorsPageModule { }
