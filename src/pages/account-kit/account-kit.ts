import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers';
@IonicPage()
@Component({
  selector: 'page-account-kit',
  templateUrl: 'account-kit.html'
})
export class AccountKit {
    userInfo: any  = {} ;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {
  }
  register(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "VN",
      facebookNotificationsEnabled: true,
    }, data => {
    (<any>window).AccountKitPlugin.getAccount(
      info => this.userInfo = info,
      err => console.log(err));
    });
  }
}
