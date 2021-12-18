export default class PieceController {
    
    validateMove(piece: any, newPosition: Array<number>, game: any): boolean {
        console.log(piece.color, game.game.turn)
        if(game){
            if(game.game.turn === piece.color){
                return true;
                /*
                if(piece.type === "pawn"){
                    return this.validatePawnMove(piece, newPosition);
                }else if(piece.type === "rook"){
                    return this.validateRookMove(piece, newPosition);
                }else if(piece.type === "knight"){
                    return this.validateKnightMove(piece, newPosition);
                }else if(piece.type === "bishop"){
                    return this.validateBishopMove(piece, newPosition);
                }else if(piece.type === "queen"){
                    return this.validateQueenMove(piece, newPosition);
                }else if(piece.type === "king"){
                    return this.validateKingMove(piece, newPosition);
                }
                */
            }
        }
        return false;
    }
}