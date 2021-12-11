"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const notificationSMS_1 = require("./notificationServices/notificationSMS");
const notificationFacebook_1 = require("./notificationServices/notificationFacebook");
const notificationEmail_1 = require("./notificationServices/notificationEmail");
const sms = new notificationSMS_1.NotificationSMS();
const fb = new notificationFacebook_1.NotificationFacebook();
const email = new notificationEmail_1.NotificationEmail();
const user = new user_1.default('Bob');
const user1 = new user_1.default('Bobby');
sms.notify('Message', user);
fb.notify('Message', user);
email.notify('Message', user);
fb.notify('Message', user1);
sms.notify('Message', user1);
email.notify('Message', user1);
//# sourceMappingURL=index.js.map