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
exports.deleteBoard = exports.createBoard = exports.getBoard = exports.getBoards = void 0;
const board_1 = __importDefault(require("../models/board"));
function getBoards() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return board_1.default.find({});
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
exports.getBoards = getBoards;
function getBoard(boardId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield board_1.default.findById(boardId);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
exports.getBoard = getBoard;
function createBoard(boardName, board) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBoard = new board_1.default({ name: boardName, currentState: board });
            return yield newBoard.save();
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
exports.createBoard = createBoard;
function deleteBoard(boardId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield board_1.default.findByIdAndRemove(boardId);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    });
}
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=boardService.js.map