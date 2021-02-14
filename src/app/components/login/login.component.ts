import { Component } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: []
})
export class LoginComponent {
  constructor(public _chatService: ChatService) {}

  login(provider: string) {
    this._chatService.login(provider);
  }
}
