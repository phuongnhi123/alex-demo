import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {
    _isTurn  =  false;
  constructor(public navCtrl: NavController,private flashlight: Flashlight) {
  }
  set isTurn(value: boolean) {
            this._isTurn = value ;
            if(this._isTurn) {
                this.flashlight.switchOn();
            }else{
                this.flashlight.switchOff();
            }
  }
  get isTurn(): boolean {
      return this._isTurn ;
  }
}
