import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadPage } from './upload';

@NgModule({
  declarations: [
   UploadPage
],
  imports: [
    IonicPageModule.forChild(UploadPage),
    TranslateModule.forChild()
  ],
  exports: [
    UploadPage
  ]
})
export class UploadPageModule { }
