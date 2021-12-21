export default interface Piece {
    getValidMoves(genericPiece: any, piece: any, board: Array<any>): Array<any>;
}