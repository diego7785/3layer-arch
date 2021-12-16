import boardPiece from "../models/boardPiece";
import PiecesService from "./pieceService";
import CustomError from "../errors/customError";


export default class BoardPieceService {
  private piecesService: PiecesService;

  constructor(){
    this.piecesService = new PiecesService();
  }

  async createPieces(pGame: any): Promise<typeof boardPiece[]> {
    try {
      const pieces = await this.piecesService.getPieces();
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
  
  async getPiecesByGame(game: string): Promise<any[]> {
    try {
      const boardPieces = await boardPiece.find({Game: game});
      const boardPiecesInfo = [];
  
      for(const piece of boardPieces){
          const pieceInfo = await this.piecesService.getPiece(piece.Piece);
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
  
  async movePiece(idPiece: string, newPosition: Array<any>): Promise<any> {
    try {
      const piece = await boardPiece.findById(idPiece);
      if(!piece){
          return null;
      }
      if(piece.isCaptured){
        throw new CustomError('Piece is captured', 400);
      } else if (!piece.isAlive){
        throw new CustomError('Piece is dead', 400);
      } else if(piece.isFirstMove){
        piece.isFirstMove = false;
      }
      
      piece.position = newPosition;
      await piece.save();
      return piece;
    } catch(err){
      console.log(err);
      throw err;
    }
  }
}

