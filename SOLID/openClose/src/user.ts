import INotificationCenter from './notificationServices/notificationCenter.interface';

export default class User {

    constructor(
        private name: string
        ) {
    }

    getName(): string {
        return this.name;
    }
}