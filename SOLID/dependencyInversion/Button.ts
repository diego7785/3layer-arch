import ILamp from "./Lamp.interface";

export default class Button {
    private lamp: ILamp;

    constructor(lamp: ILamp) {
        this.lamp = lamp;
    }

    onButtonListener(){
        if(this.lamp.getStatus()){
            this.lamp.turnOff();
        } else {
            this.lamp.turnOn();
        }
    }
}