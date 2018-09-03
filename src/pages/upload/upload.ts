import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';
import { User } from '../../providers';
import { Messages } from '../chats/chats';
@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {
  currentItems: any = [];
  
  public myPhotosRef: any;
  public myPhoto: any;
  public myPhotoURL: any;
  public loading: any ;
  constructor(public navCtrl: NavController, public camera: Camera, public loadingCtrl: LoadingController,
  public user: User) {
    this.myPhotosRef = firebase.storage().ref('/Photos/');
  }

  takePhoto() {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.PNG,
      saveToPhotoAlbum: true
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  selectPhoto(): void {
     this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      this.myPhoto = imageData;
      this.uploadPhoto();
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }

  private uploadPhoto(): void {
     this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Please wait...'
    });
    this.loading.present();
    this.myPhotosRef.child(this.generateUUID()).child('myPhoto.png')
      .putString(this.myPhoto, 'base64', { contentType: 'image/png' })
      .then((savedPicture) => {
        this.loading.dismiss();
        this.myPhotoURL = savedPicture.downloadURL;
        const messagesRef = firebase.database().ref().child("mensajes");
        const msg: Messages = { time: new Date().getTime(), mensaje: { isLink: true, data:  this.myPhotoURL  } };
        messagesRef.push({ mensaje: JSON.stringify(msg), nombre: this.user._user.email });
       if(this.navCtrl.canGoBack()) {
        setTimeout( r =>   this.navCtrl.pop() ,3000  );
       }
      });
  }
  private generateUUID(): any {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
}
