import INotificationCenter from './notificationCenter.interface';
import User from '../user';

export class NotificationFacebook implements INotificationCenter{
    notify(message: string, user: User): void {
        console.log('Sending message via facebook: ' + message+' to '+ user.getName());
    }
}