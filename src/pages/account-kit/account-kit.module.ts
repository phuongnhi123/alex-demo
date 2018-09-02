import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountKit } from './account-kit';


@NgModule({
  declarations: [
    AccountKit,
  ],
  imports: [
    IonicPageModule.forChild(AccountKit),
    TranslateModule.forChild()
  ],
  exports: [
    AccountKit
  ]
})
export class  AccountKitPageModule { }
