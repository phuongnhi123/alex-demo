import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController,  } from 'ionic-angular';
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
  messages = [];
  constructor(public navCtrl: NavController , private user: User) {
    this.userName = this.user._user.email;
    this.getMessages();
  }
  getMessages(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for(var key in data){
        this.messages.push(data[key]);
      }

      this.scrollToBottom();
    });
  }
  scrollToBottom(){
    var contentEnd = document.getElementById("content-end") ? document.getElementById("content-end").offsetTop : 0;
    this.content.scrollTo(0, contentEnd, 300);
  }

  sendMessage(){
    if(this.message !== "") {
      var messagesRef = firebase.database().ref().child("mensajes");
      messagesRef.push({mensaje: this.message, nombre: this.userName });
      this.message = "";
    }
 
  }
}
