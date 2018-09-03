import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

@IonicPage()
@Component({
  selector: 'page-sensors',
  templateUrl: 'sensors.html'
})
export class SensorsPage {
    _isTurn  =  false;
    orientation: GyroscopeOrientation ;
  constructor(public navCtrl: NavController,private flashlight: Flashlight, private gyroscope: Gyroscope) {
    this.gyroscope.watch()
    .subscribe((orientation: GyroscopeOrientation) => {
       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
       this.orientation = orientation;
    });  
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
