"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const GameSchema = new Schema({
    status: {
        type: Boolean,
        required: true
    },
    board: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
    },
    turn: {
        type: String,
        default: 'W'
    },
    check: {
        type: Boolean,
        required: true
    },
    checkMate: {
        type: Boolean,
        required: true
    }
});
exports.default = mongoose_1.default.model('Game', GameSchema);
//# sourceMappingURL=game.js.map