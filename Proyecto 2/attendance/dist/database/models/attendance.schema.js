"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const AttendanceSchema = new Schema({
    startHour: {
        type: String,
        required: true
    },
    endHour: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    notes: {
        type: String,
        default: ''
    },
    idUser: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model('Attendance', AttendanceSchema);
//# sourceMappingURL=attendance.schema.js.map