"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = __importDefault(require("../models/piece"));
const connection_1 = require("../databaseService/connection");
const pieces = [
    {
        name: "WKing",
        color: "White",
        position: [0, 4],
        moves: ["1F"]
    },
    {
        name: "BKing",
        color: "Black",
        position: [7, 4],
        moves: ["1F"]
    },
    {
        name: "WQueen",
        color: "White",
        position: [0, 3],
        moves: ["F", "D"]
    },
    {
        name: "BQueen",
        color: "Black",
        position: [7, 3],
        moves: ["F", "D"]
    }
];
function createPieces() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, connection_1.connect)();
        pieces.forEach(piece => {
            const newPiece = new piece_1.default(piece);
            newPiece.save();
        });
        yield (0, connection_1.disconnect)();
    });
}
createPieces();
//# sourceMappingURL=piece.js.map