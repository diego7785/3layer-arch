"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = void 0;
function createBoard() {
    let board = [];
    for (let i = 0; i < 8; i++) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
            board[i][j] = null;
        }
    }
    return board;
}
exports.createBoard = createBoard;
//# sourceMappingURL=board.js.map