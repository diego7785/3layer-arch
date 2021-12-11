import User from '../user';

export default interface INotificationCenter {
    notify(message: string, user: User): void; 
}