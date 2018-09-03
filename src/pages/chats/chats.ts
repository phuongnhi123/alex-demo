import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, } from 'ionic-angular';
import * as firebase from 'firebase';
import { User } from '../../providers';
@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {
  @ViewChild("content") content: any;
  userName: string = "";
  message: string = "";
  messages: Item[] = [];
  constructor(public navCtrl: NavController, private user: User) {
    this.userName = this.user._user.email;
    this.getMessages();
  }
  public goUpload() {
    this.navCtrl.push('UploadPage');
  }
  getMessages() {
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for (var key in data) {
          try {
            const item: Item = { userName: data[key].nombre, messages: JSON.parse(data[key].mensaje) };
            this.messages.push(item);
          }
          catch (err) {
          }
      }


      this.scrollToBottom();
    });
  }
  scrollToBottom() {
    var contentEnd = document.getElementById("content-end") ? document.getElementById("content-end").offsetTop : 0;
    this.content.scrollTo(0, contentEnd, 300);
  }
  sendMessage() {
    if (this.message !== "") {
      const messagesRef = firebase.database().ref().child("mensajes");
      const msg: Messages = { time: new Date().getTime(), mensaje: { isLink: false, data: this.message } };
      messagesRef.push({ mensaje: JSON.stringify(msg), nombre: this.userName });
      this.message = "";
    }

  }
}
export interface Item {
  userName: string;
  messages: Messages;
}
export interface Messages {
  time: number;
  mensaje: Mensaje
}
export interface Mensaje {
  isLink: boolean;
  data: string;
}
