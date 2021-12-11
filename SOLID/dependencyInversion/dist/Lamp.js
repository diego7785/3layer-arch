"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lamp {
    constructor(status) {
        this.status = status;
    }
    turnOn() {
        this.status = true;
        console.log('Lamp is on');
    }
    turnOff() {
        this.status = false;
        console.log('Lamp is off');
    }
    getStatus() {
        return this.status;
    }
}
exports.default = Lamp;
//# sourceMappingURL=Lamp.js.map