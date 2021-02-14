(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Google Drive\School\Caltech\Treehacks\pagechat-chrome\src\main.ts */"zUnb");


/***/ }),

/***/ "3tD2":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function (a0, a1) { return { "my-username-span": a0, "your-username-span": a1 }; };
function ChatComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r2._chatService.user.uid === chat_r1.from_uid, ctx_r2._chatService.user.uid !== chat_r1.from_uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r1.name, " ");
} }
const _c1 = function (a0) { return { "text-right": a0 }; };
const _c2 = function (a0, a1) { return { "text-right-span": a0, "text-left-span": a1 }; };
function ChatComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_2_div_1_Template, 2, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r0._chatService.user.uid === chat_r1.from_uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0._chatService.user.uid !== chat_r1.from_uid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx_r0._chatService.user.uid === chat_r1.from_uid, ctx_r0._chatService.user.uid !== chat_r1.from_uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", chat_r1.message, " ");
} }
class ChatComponent {
    constructor(_chatService) {
        this._chatService = _chatService;
        this.message = "";
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
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 8, vars: 2, consts: [[1, "chat-window"], ["id", "app-messages", 1, "app-messages"], ["class", "chat-div", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message-input-div"], ["type", "text", "name", "message", "placeholder", "what's on your mind?", 1, "message-input", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "send-button", 3, "click"], [1, "chat-div", 3, "ngClass"], ["class", "username-div", 3, "ngClass", 4, "ngIf"], [1, "message-div"], [1, "message-span", 3, "ngClass"], [1, "username-div", 3, "ngClass"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_2_Template, 5, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_4_listener($event) { return ctx.message = $event; })("keyup.enter", function ChatComponent_Template_input_keyup_enter_4_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_5_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._chatService.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".chat-window[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 335px;\n  overflow: hidden;\n  border: 1px solid #65737e;\n  margin-top: 7px;\n}\n\n.app-messages[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 300px;\n  \n  padding: 5px;\n}\n\n.message-input-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid #65737e;\n  align-items: center;\n  height: 35px;\n  margin-top: 5px;\n}\n\n.message-input[_ngcontent-%COMP%] {\n  width: 230px;\n  padding-bottom: 12px;\n  font-size: 1rem;\n  border: none;\n}\n\n.message-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.send-button[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-bottom: 12px;\n  background-color: black;\n  color: white;\n  border: none;\n  height: 35px;\n}\n\n.send-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.chat-div[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n  word-wrap: break-word;\n}\n\n.username-div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-bottom: 0.3rem;\n}\n\n.message-div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 240px;\n}\n\n.message-span[_ngcontent-%COMP%] {\n  padding: 7px 10px 7px 10px;\n  border-radius: 7px;\n  width: -webkit-fit-content;\n  height: -webkit-fit-content;\n}\n\n.text-right-span[_ngcontent-%COMP%] {\n  float: right;\n  text-align: right;\n  background-color: #d4ebf2;\n}\n\n.text-left-span[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUVBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd2luZG93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMzVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjU3MzdlO1xyXG4gICAgbWFyZ2luLXRvcDogN3B4O1xyXG59XHJcblxyXG4uYXBwLW1lc3NhZ2VzIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAvKmJhY2tncm91bmQ6Z3JheTsqL1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1pbnB1dC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjU3MzdlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbi5tZXNzYWdlLWlucHV0IHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubWVzc2FnZS1pbnB1dDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc2VuZC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYXQtZGl2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi51c2VybmFtZS1kaXYge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbn1cclxuXHJcbi5tZXNzYWdlLWRpdiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXNwYW4ge1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHggN3B4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcclxufVxyXG5cclxuLnRleHQtcmlnaHQtc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGViZjI7XHJcbn1cclxuXHJcbi50ZXh0LWxlZnQtc3BhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyC6KqtZ1MGPxcHFrVYmqlIANU589g9x2xw",
        authDomain: "chrome-extension-noninertial.firebaseapp.com",
        databaseURL: "https://chrome-extension-noninertial-default-rtdb.firebaseio.com",
        projectId: "chrome-extension-noninertial",
        storageBucket: "chrome-extension-noninertial.appspot.com",
        messagingSenderId: "908579202364",
        appId: "1:908579202364:web:446c01b1e3e347d0562a39",
        measurementId: "G-48RJPR3D4L"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/firebase.service */ "Z2Br");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");







function AppComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_div_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Passowrd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_div_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.signInWithEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.signUpWithEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.authService.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign in with Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.password);
} }
function AppComponent_div_4_div_3_div_1_div_4_div_1_b_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function AppComponent_div_4_div_3_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDFE2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_4_div_3_div_1_div_4_div_1_b_7_Template, 2, 0, "b", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_3_div_1_div_4_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r17.updateRoom(user_r14.uid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CHAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r15.hasSentMsg(user_r14.uid) ? "#005c66" : "#000000"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r14.email ? user_r14.email : user_r14.uid, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.hasSentMsg(user_r14.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", user_r14.currentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r14.currentTitle, " ");
} }
function AppComponent_div_4_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_4_div_3_div_1_div_4_div_1_Template, 14, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r14.isFriend);
} }
function AppComponent_div_4_div_3_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDFE2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Anonymous User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_3_div_1_div_8_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const user_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.updateRoom(user_r21.uid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CHAT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_div_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_4_div_3_div_1_div_8_div_1_Template, 10, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !user_r21.isFriend);
} }
function AppComponent_div_4_div_3_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_3_div_1_div_19_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.authService.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Friends Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_div_3_div_1_div_4_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "People on the Same Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_4_div_3_div_1_div_8_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_div_4_div_3_div_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.friendUid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_3_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.addFriend(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_3_div_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.openChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Open Last Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_div_4_div_3_div_1_div_19_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.onlineUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.onlineUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.friendUid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 4, ctx_r10.authService.afAuth.user));
} }
function AppComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_4_div_3_div_1_Template, 21, 6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.authService.afAuth.user));
} }
function AppComponent_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_4_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.closeChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Close Chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_div_4_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.authService.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign Out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_4_div_4_div_1_Template, 7, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.authService.afAuth.user));
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_4_div_1_Template, 20, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_4_div_3_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_div_4_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r0.authService.afAuth.user) === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.chatService.inchat);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chatService.inchat);
} }
class AppComponent {
    constructor(zone, authService, firebaseService, chatService) {
        this.zone = zone;
        this.authService = authService;
        this.firebaseService = firebaseService;
        this.chatService = chatService;
        this.url = '';
        this.title = '';
        this.authLoaded = false;
        this.friendUid = '';
        this.email = '';
        this.password = '';
        this.friends = [];
        this.onlineUsers = [];
        this.message = "";
        // holds a list of people who've sent unread messages
        // duplicates allowed
        this.unreads = [];
    }
    ngOnInit() {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            this.zone.run(() => {
                this.url = tabs[0].url;
                this.title = tabs[0].title;
                this.urlObject = new URL(this.url);
            });
            this.authService.afAuth.user.subscribe(data => {
                this.authLoaded = true;
                this.uid = data.uid;
                this.firebaseService.getFriends(data.uid).subscribe(data => {
                    this.friends = data;
                    this.firebaseService.getOnlineUsers(this.uid, this.friends.map(x => x.uid)).subscribe(data => {
                        this.onlineUsers = data.filter(item => !!item);
                    });
                });
                // for getting unread messages
                this.chatService.getUnreads().subscribe(data => {
                    this.unreads = data.map(function (a) { return a.from_uid; });
                    this.chatService.unreads = this.unreads;
                });
            });
        });
    }
    signInWithEmail() {
        this.authService.signInViaEmail(this.email, this.password);
    }
    signUpWithEmail() {
        this.authService.signUpViaEmail(this.email, this.password);
    }
    addFriend() {
        if (this.uid !== null || this.uid !== undefined) {
            this.firebaseService.addFriend(this.uid, this.friendUid);
            this.friendUid = '';
        }
    }
    sendMessage() {
        if (this.message.length === 0) {
            return;
        }
        this.chatService
            .addMessage(this.message)
            .then(() => (this.message = ""))
            .catch(error => console.log("error", error));
    }
    closeChat() {
        this.chatService.inchat = false;
    }
    openChat() {
        this.chatService.inchat = true;
    }
    updateRoom(uid_in) {
        // roomId is friend's uid and this user's uid, appended
        // in alphabetical order. just a temporary way to hash
        this.chatService.friend_uid = uid_in;
        if (uid_in < this.chatService.user.uid) {
            this.chatService.roomId = uid_in + this.chatService.user.uid;
        }
        else {
            this.chatService.roomId = this.chatService.user.uid + uid_in;
        }
        this.chatService.inchat = true;
    }
    hasSentMsg(uid_in) {
        return this.unreads.some((sender) => sender == uid_in);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "title-div"], [4, "ngIf"], ["class", "auth-div", 4, "ngIf"], [1, "auth-div"], [1, "auth-input-div"], [1, "auth-label-div"], ["type", "email", 1, "auth-input", 3, "ngModel", "ngModelChange"], ["type", "password", 1, "auth-input", 3, "ngModel", "ngModelChange"], [1, "auth-button-div"], [1, "auth-button", 3, "click"], [1, "google-auth-div"], [1, "google-auth-button", 3, "click"], [1, "online-friends-div"], [1, "online-friends-header-div"], [4, "ngFor", "ngForOf"], [1, "online-users-div"], [1, "online-users-header-div"], [1, "add-friend-div"], ["type", "text", 1, "add-friend-input", 3, "ngModel", "ngModelChange"], [1, "add-friend-button", 3, "click"], [1, "button-group-div"], [1, "aux-button", 3, "click"], [1, "aux-button"], ["class", "sign-out-div", 4, "ngIf"], ["class", "friend-div", 4, "ngIf"], [1, "friend-div"], [1, "friend-header-div"], [1, "green-circle-span"], [1, "friend-email-span", 3, "ngStyle"], ["style", "color:red", 4, "ngIf"], [1, "chat-button", 3, "click"], [1, "friend-current-title-div"], ["target", "_blank", 1, "friend-current-title-a", 3, "href"], [2, "color", "red"], ["class", "user-div", 4, "ngIf"], [1, "user-div"], [1, "user-header-div"], [1, "user-email-span"], [1, "sign-out-div"], [1, "sign-out-span", 3, "click"], [1, "chat-button-group-div"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PageChat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 5, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 400px;\n  padding: 0 5px 0 5px;\n  margin: 0;\n}\n\n.title-div[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1.2rem;\n  text-align: center;\n}\n\n.header-div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.online-friends-div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.7rem;\n  margin-bottom: 1.2rem;\n}\n\n.online-friends-header-div[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n  color: #343d46;\n}\n\n.friend-div[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n}\n\n.friend-header-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.green-circle-span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  margin-right: 0.3rem;\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 0%;\n}\n\n.friend-email-span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.chat-button[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background-color: #4f5b66;\n  color: white;\n  border: 1px solid #4f5b66;\n}\n\n.chat-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.friend-current-title-div[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  margin-bottom: 0.3rem;\n  font-size: 0.85rem;\n}\n\n.friend-current-title-a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\n.friend-current-title-a[_ngcontent-%COMP%]:hover {\n  color: #1167b1;\n  cursor: pointer;\n}\n\n.online-users-div[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.5rem;\n  margin-bottom: 1.2rem;\n}\n\n.online-users-header-div[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n  color: #343d46;\n}\n\n.user-div[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n}\n\n.user-header-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-email-span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.add-friend-div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.add-friend-input[_ngcontent-%COMP%] {\n  width: 12rem;\n}\n\n.add-friend-button[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background-color: #d0d5de;\n  border: 1px solid black;\n}\n\n.add-friend-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.button-group-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n\n.aux-button[_ngcontent-%COMP%] {\n  width: 9rem;\n}\n\n.aux-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.sign-out-div[_ngcontent-%COMP%] {\n  margin-top: 0.8rem;\n  width: 100%;\n  text-align: right;\n  font-size: 0.9rem;\n}\n\n.sign-out-span[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: red;\n}\n\n.auth-div[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.auth-input-div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n\n.auth-label-div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 4rem;\n}\n\n.auth-input[_ngcontent-%COMP%] {\n  width: 13rem;\n}\n\n.auth-button-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0.8rem 0 0.8rem 0;\n}\n\n.auth-button[_ngcontent-%COMP%] {\n  width: 9rem;\n  font-size: 0.9rem;\n  background-color: #c0c5ce;\n  padding: 0.2rem;\n  color: black;\n  border: none;\n}\n\n.google-auth-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.google-auth-button[_ngcontent-%COMP%] {\n  color: black;\n  background-color: white;\n  border: 1px solid black;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.auth-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.google-auth-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.chat-button-group-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.chat-button[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtBO0VBQ0ksaUJBQUE7QUFGSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDVweCAwIDVweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRpdGxlLWRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4ub25saW5lLWZyaWVuZHMtZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC43cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG59XHJcblxyXG4ub25saW5lLWZyaWVuZHMtaGVhZGVyLWRpdiB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIGNvbG9yOiAjMzQzZDQ2O1xyXG59XHJcblxyXG4uZnJpZW5kLWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5mcmllbmQtaGVhZGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyZWVuLWNpcmNsZS1zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjNyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAlO1xyXG59XHJcblxyXG4uZnJpZW5kLWVtYWlsLXNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uY2hhdC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1YjY2O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRmNWI2NjtcclxufVxyXG5cclxuLmNoYXQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZyaWVuZC1jdXJyZW50LXRpdGxlLWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbn1cclxuXHJcbi5mcmllbmQtY3VycmVudC10aXRsZS1hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmZyaWVuZC1jdXJyZW50LXRpdGxlLWE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMTY3YjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vbmxpbmUtdXNlcnMtZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG59XHJcblxyXG4ub25saW5lLXVzZXJzLWhlYWRlci1kaXYge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzM0M2Q0NjtcclxufVxyXG5cclxuLnVzZXItZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDAuMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnVzZXItaGVhZGVyLWRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItZW1haWwtc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5hZGQtZnJpZW5kLWRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uYWRkLWZyaWVuZC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbn1cclxuXHJcbi5hZGQtZnJpZW5kLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQ1ZGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmFkZC1mcmllbmQtYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbi1ncm91cC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5hdXgtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG4uYXV4LWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWduLW91dC1kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMC44cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uc2lnbi1vdXQtc3Bhbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5cclxuLy8gQXV0aGVudGljYXRpb24gRGVzaWduXHJcblxyXG4uYXV0aC1kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmF1dGgtaW5wdXQtZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmF1dGgtbGFiZWwtZGl2IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG4uYXV0aC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTNyZW07XHJcbn1cclxuXHJcbi5hdXRoLWJ1dHRvbi1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwLjhyZW0gMCAwLjhyZW0gMDtcclxufVxyXG5cclxuLmF1dGgtYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzBjNWNlO1xyXG4gICAgcGFkZGluZzogMC4ycmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZ29vZ2xlLWF1dGgtZGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ29vZ2xlLWF1dGgtYnV0dG9uIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmF1dGgtYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmdvb2dsZS1hdXRoLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LWJ1dHRvbi1ncm91cC1kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");


class LoginComponent {
    constructor(_chatService) {
        this._chatService = _chatService;
    }
    login(provider) {
        this._chatService.login(provider);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 13, vars: 0, consts: [[1, "row"], [1, "col-md-12", "text-center"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "fab", "fa-google"], ["type", "button", 1, "btn", "btn-outline-info", "ml-3", 3, "click"], [1, "fab", "fa-twitter"], ["type", "button", 1, "btn", "btn-outline-primary", "ml-3", 3, "click"], [1, "fab", "fa-facebook-f"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ingrese al chat con su cuenta favorita ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() { return ctx.login("google"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_7_listener() { return ctx.login("twitter"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() { return ctx.login("facebook"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Z2Br":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");





class FirebaseService {
    constructor(afs) {
        this.afs = afs;
    }
    addFriend(myUid, friendUid) {
        this.afs.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_COLLECTION"]).doc(myUid).collection(_constants__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_COLLECTION"])
            .doc(friendUid).set({
            'timestamp': firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp()
        });
        this.afs.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_COLLECTION"]).doc(friendUid).collection(_constants__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_COLLECTION"])
            .doc(myUid).set({
            'timestamp': firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp()
        });
    }
    getFriends(uid) {
        return this.afs.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_COLLECTION"]).doc(uid).collection(_constants__WEBPACK_IMPORTED_MODULE_2__["FRIENDS_COLLECTION"])
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(actions => {
            return actions.map(a => {
                return {
                    uid: a.payload.doc.id
                };
            });
        }));
    }
    getOnlineUsers(uid, friends) {
        return this.afs.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["STATUS_COLLECTION"], ref => ref.where('state', '==', 'online'))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(actions => {
            return actions.map(a => {
                const status = a.payload.doc.data();
                if (uid !== a.payload.doc.id) {
                    return Object.assign({ uid: a.payload.doc.id, isFriend: friends.includes(a.payload.doc.id) }, status);
                }
            });
        }));
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/chat/chat.component */ "3tD2");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/chat.service */ "sjK5");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/firebase.service */ "Z2Br");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");









// import { AppRoutingModule } from './app-routing.module';






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_10__["FirebaseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorageModule"]] }); })();


/***/ }),

/***/ "l207":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: HISTORY_COLLECTION, STATUS_COLLECTION, FRIENDS_COLLECTION, CHATS_COLLECTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY_COLLECTION", function() { return HISTORY_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_COLLECTION", function() { return STATUS_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRIENDS_COLLECTION", function() { return FRIENDS_COLLECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHATS_COLLECTION", function() { return CHATS_COLLECTION; });
const HISTORY_COLLECTION = 'history';
const STATUS_COLLECTION = 'status';
const FRIENDS_COLLECTION = 'friends';
const CHATS_COLLECTION = 'chats';


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");



class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
    }
    signInViaEmail(email, password) {
        return this.afAuth.signInWithEmailAndPassword(email, password)
            .catch(err => {
            alert(err.code);
        });
    }
    signUpViaEmail(email, password) {
        return this.afAuth.createUserWithEmailAndPassword(email, password)
            .catch(err => {
            alert(err.code);
        });
    }
    signInWithGoogle() {
        return this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider());
    }
    signOut() {
        return this.afAuth.signOut();
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






class ChatService {
    constructor(_angularFirestore, _angularFireAuth) {
        this._angularFirestore = _angularFirestore;
        this._angularFireAuth = _angularFireAuth;
        this.user = {};
        this.chats = [];
        this.unreads = [];
        this._angularFireAuth.authState.subscribe(user => {
            if (!user) {
                this.user = {};
                // if user logged out:        
                // this._router.navigate(["/"]);
                return;
            }
            // this._router.navigate(["/"]);
            this.user.name = user.displayName;
            this.user.uid = user.uid;
            this.user.photo = user.photoURL;
            // TODO ask db for the 
            this.roomId = "lobby";
            this.inchat = false;
        });
    }
    // below login/logout not used, left to keep login components alive in case
    login(provider) {
        // switch (provider) {
        //   case "google":
        this._angularFireAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider());
        //     break;
        //   case "twitter":
        //     this._angularFireAuth.auth.signInWithPopup(
        //       new firebase.auth.TwitterAuthProvider()
        //     );
        //     break;
        //   default:
        //     this._angularFireAuth.auth.signInWithPopup(
        //       new firebase.auth.FacebookAuthProvider()
        //     );
        //     break;
        // }
    }
    logout() {
        this._angularFireAuth.signOut();
    }
    loadMessage() {
        this.itemsCollection = this._angularFirestore.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["CHATS_COLLECTION"], ref => ref.where("roomId", "==", this.roomId).orderBy("date", "desc").limit(Math.max(10 + this.unreads.length)));
        return this.itemsCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((messages) => {
            this.chats = [];
            for (let message of messages) {
                this.chats.unshift(message);
                // if the message we're displaying is to current user (not sent from current user)
                // then want to update the read status
                if (message.to_uid == this.user.uid) {
                    this._angularFirestore.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["CHATS_COLLECTION"]).doc(message.from_uid + message.date)
                        .update({ read: true });
                }
            }
            return this.chats;
        }));
    }
    addMessage(text) {
        let message = {
            name: this.user.name,
            message: text,
            date: firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.Timestamp.now().toMillis(),
            from_uid: this.user.uid,
            to_uid: this.friend_uid,
            roomId: this.roomId,
            read: false
        };
        return this.itemsCollection.doc(message.from_uid + message.date).set(message);
    }
    getUnreads() {
        return this._angularFirestore.collection(_constants__WEBPACK_IMPORTED_MODULE_2__["CHATS_COLLECTION"], ref => ref.where('to_uid', '==', this.user.uid).where('read', '==', false))
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(actions => {
            return actions.map(a => {
                // const message: any = a.payload.doc.data();
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                this.unreads = [];
                this.unreads.unshift(data);
                return Object.assign({ id }, data);
            });
        }));
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map