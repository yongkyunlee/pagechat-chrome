import { Component, OnInit } from "@angular/core";
import { ChatService } from "src/app/services/chat.service";

@Component({
    selector: "app-chat",
    templateUrl: "./chat.component.html",
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    message: string = "";
    element: any;

    constructor(public _chatService: ChatService) {
        this._chatService.loadMessage().subscribe(() => {
            setTimeout(() => {
                this.element.scrollTop = this.element.scrollHeight;
            }, 20);
        });
    }

    ngOnInit() {
        this.element = document.getElementById("app-messages");
    }

    sendMessage() {
        if (this.message.length === 0) {
            return;
        }
        this._chatService
            .addMessage(this.message)
            .then(() => (this.message = ""))
            .catch(error => console.log("error", error));
    }
}
