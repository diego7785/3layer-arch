import ILamp from './Lamp.interface';

export default class Lamp implements ILamp {

    private status: boolean;

    constructor(status: boolean) {
        this.status = status;
    }

    turnOn(): void {
        this.status = true;
        console.log('Lamp is on');
    }

    turnOff(): void {
        this.status = false;
        console.log('Lamp is off');
    }

    getStatus(): boolean {
        return this.status;
    }
}