
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsPage } from './chats';
@NgModule({
  declarations: [
    ChatsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ChatsPage  ]
})
export class  ChatsPageModule { }
