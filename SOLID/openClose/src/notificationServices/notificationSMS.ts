import INotificationCenter from './notificationCenter.interface';
import User from '../user';

export class NotificationSMS implements INotificationCenter{
    notify(message: string, user: User): void {
        console.log('Sending message via SMS: ' + message+' to '+ user.getName());
    }
}