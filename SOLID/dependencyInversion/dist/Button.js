"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor(lamp) {
        this.lamp = lamp;
    }
    onButtonListener() {
        if (this.lamp.getStatus()) {
            this.lamp.turnOff();
        }
        else {
            this.lamp.turnOn();
        }
    }
}
exports.default = Button;
//# sourceMappingURL=Button.js.map