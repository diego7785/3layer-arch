"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const PieceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    position: {
        type: Array,
        required: true
    },
    isAlive: {
        type: Boolean,
        default: true
    },
    isFirstMove: {
        type: Boolean,
        default: true
    },
    isPromoted: {
        type: Boolean,
        default: false
    },
    isCaptured: {
        type: Boolean,
        default: false
    },
    isPromotedTo: {
        type: String,
        default: false
    },
    moves: {
        type: Array,
        required: true
    }
});
exports.default = mongoose_1.default.model('Piece', PieceSchema);
//# sourceMappingURL=piece.js.map