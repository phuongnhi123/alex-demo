import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';
import firebase from 'firebase';
@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
    <div class="app-wrapp">
    <div class="app-container">
    <!-- @main page view -->
    <div class="view-main">
        <div class="header-wrapp">
            <div class="app-detail">
                <div>
                    <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-1/p50x50/30705194_173122723501319_2362293048580243456_n.jpg?_nc_cat=0&oh=7d7422a807b17b87426c3ead62356900&oe=5BD22F44" alt="">
                </div>
                <div>Alex Huynh</div>
                <div class="status"> 098 177 30 84 </div>
            </div>
            <div class="wave-wrapp">
                <svg class="wave" xmlns="http://www.w3.org/2000/svg"  viewBox="0 24 150 28"   preserveAspectRatio="none">
                    <defs>
                        <path id="gentle-wave" d="m -160,44.4 c 30,0 58,-18 87.7,-18 30.3,0 58.3,18 87.3,18 30,0 58,-18 88,-18 30,0 58,18 88,18 l 0,34.5 -351,0 z" />
                    </defs>
                    <g class="parallax">
                        <use xlink:href="#gentle-wave" x="50" y="0" fill="rgba(255, 255, 255, 0.48)"/>
                        <use xlink:href="#gentle-wave" x="50" y="3" fill="rgba(255, 255, 255, 0.78)"/>
                        <use xlink:href="#gentle-wave" x="50" y="6" fill="rgba(255, 255, 255, 0.8)"/>  
                    </g>
                </svg>
            </div>
        </div>
        <div class="content-wrapp">
  
            <div id="master-nav-items" data-viewport="true">
              <div id="item-4" class="active">
                <div class="profile-setting">
                    <div class="touch-y" style="transform: translateY(-2px);">
                        <div class="information">
                            <div class="public">
                                <p>
                                    PUBLIC INFORMATION
                                </p>
                                <div class="form-group">
                                    <span>
                                        <i class="material-icons">assignment_ind</i>
                                    </span>
                                    <input type="text" placeholder="USERNAME" value="@Alex.huynh">
                                </div>
                                <div class="form-group">
                                    <span>
                                        <i class="material-icons">face</i>
                                    </span>
                                    <input type="text" placeholder="NAME" value="Alex Huynh">
                                </div>
                                <div class="form-group">
                                    <span>
                                        <i class="material-icons">public</i>
                                    </span>
                                    <input type="text" placeholder="WEB SITE">
                                </div>
                                <div class="form-group h-80">
                                    <span>
                                        <i class="material-icons">info</i>
                                    </span>
                                    <textarea placeholder="BIO" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="private">
                                <p>
                                    PRIVATE INFORMATION
                                </p>
                                <div class="form-group">
                                    <span>
                                        <i class="material-icons">local_post_office</i>
                                    </span>
                                    <input type="text" placeholder="EMAIL" value="k40cntt@gmail.com">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         
        </div>
    </div>
    <!-- @send message view -->
  
    </div>   
    </div>
<!-- <ion-list>
<ion-menu-toggle auto-hide="false" *ngFor="let p of appPages">
  <ion-item [routerDirection]="'root'" [routerLink]="[p.url]">
    <ion-icon slot="start" [name]="p.icon"></ion-icon>
    <ion-label>
      {{p.title}}
    </ion-label>
  </ion-item>
</ion-menu-toggle>
</ion-list> -->
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: 'TutorialPage' },
    { title: 'Welcome', component: 'WelcomePage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Cards', component: 'CardsPage' },
    { title: 'Content', component: 'ContentPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Signup', component: 'SignupPage' },
    { title: 'Master Detail', component: 'ListMasterPage' },
    { title: 'Menu', component: 'MenuPage' },
    { title: 'Settings', component: 'SettingsPage' },
    { title: 'Search', component: 'SearchPage' }
  ]

  constructor(private translate: TranslateService, platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyC5aDAcZsYlxwbngbx3WgreDhatfyN2G6Q",
      authDomain: "ionic-real-time.firebaseapp.com",
      databaseURL: "https://ionic-real-time.firebaseio.com",
      projectId: "ionic-real-time",
      storageBucket: "ionic-real-time.appspot.com",
      messagingSenderId: "731314750253"
      });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
