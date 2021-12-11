import INotificationCenter from './notificationCenter.interface';
import User from '../user';

export class NotificationEmail implements INotificationCenter{
    notify(message: string, user: User): void {
        console.log('Sending message via email: ' + message+' to '+ user.getName());
    }
}