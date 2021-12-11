"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Lamp_1 = __importDefault(require("./Lamp"));
const Button_1 = __importDefault(require("./Button"));
const lamp = new Lamp_1.default(false);
const button = new Button_1.default(lamp);
button.onButtonListener();
button.onButtonListener();
//# sourceMappingURL=index.js.map