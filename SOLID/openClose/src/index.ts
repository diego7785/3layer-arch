import User from "./user";
import { NotificationSMS } from './notificationServices/notificationSMS';
import { NotificationFacebook } from './notificationServices/notificationFacebook';
import { NotificationEmail } from './notificationServices/notificationEmail';


const sms = new NotificationSMS();
const fb = new NotificationFacebook();
const email = new NotificationEmail();

const user = new User('Bob');
const user1 = new User('Bobby');

sms.notify('Message', user);
fb.notify('Message', user);
email.notify('Message', user);


fb.notify('Message', user1);
sms.notify('Message', user1);
email.notify('Message', user1);


