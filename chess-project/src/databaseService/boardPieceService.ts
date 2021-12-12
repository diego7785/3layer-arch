import boardPiece from "../models/boardPiece";
import { getPieces, getPiece } from "./pieceService";


export async function createPieces(pGame: any): Promise<typeof boardPiece[]> {
  try {
    const pieces = await getPieces();
    const returnPieces = [];
    for(const piece of pieces){
        const newBoardPiece = new boardPiece({
            position: piece.position,
            Game: pGame._id,
            Piece: piece._id
        });
        returnPieces.push(newBoardPiece);
        await newBoardPiece.save();
    }
    return returnPieces;
  } catch(err){
    console.log(err);
    throw err;
  }
}

export async function getPiecesByGame(game: string): Promise<Object> {
  try {
    const boardPieces = await boardPiece.find({Game: game});
    const boardPiecesInfo = [];

    for(const piece of boardPieces){
        const pieceInfo = await getPiece(piece.Piece);
        boardPiecesInfo.push({
            name: pieceInfo.name,
            color: pieceInfo.color,
            moves: pieceInfo.moves,
            position: piece.position,
            _id: piece._id,
            Game: piece.Game,
            isAlive: piece.isAlive,
            isFirstMove: piece.isFirstMove,
            isPromoted: piece.isPromoted,
            isCaptured: piece.isCaptured,
            isPromotedTo: piece.isPromotedTo,
            Piece: piece.Piece
        });
    }

    return boardPiecesInfo;
  } catch(err){
    console.log(err);
    throw err;
  }
}