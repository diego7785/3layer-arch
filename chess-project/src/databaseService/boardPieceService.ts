import CustomError from "../errors/customError";
import PieceController from "../controller/piece";
import GameService from "./gameService";
import BoardPieceGameService from './boardPieceGameService';
import BoardPiece from '../models/boardPiece';
import Piece from '../models/piece';

export default class BoardPieceService extends BoardPieceGameService {
  private pieceController: PieceController;
  private gameService: GameService;

  constructor() {
    super();
    this.pieceController = new PieceController();
    this.gameService = new GameService();
  }

  pieceIsAbleToBeMoved(piece: any): boolean {
    if (!piece.isAlive) {
      throw new CustomError("Piece is dead", 400);
    }  

    return true;
  }

  changeUpdateIsFirstMove(piece: any){
    if (piece.isFirstMove) {
      piece.isFirstMove = false;
    }
  }

  async movePiece(idPiece: string, newPosition: Array<any>): Promise<any> {
    try {
      const piece = await BoardPiece.findById(idPiece);
      if (!piece) {
        return null;
      }
      const boardAndGameInfo = await this.gameService.getBoardAndGameInfo(piece.Game);
      if(!boardAndGameInfo){
        throw new CustomError("Game not found", 400);
      }

      this.gameService.gameIsCheckMate(boardAndGameInfo);
      this.gameService.gameIsOver(boardAndGameInfo);

      await this.gameService.changeGameStatus(piece.Game, 'I');
      
      const genericPiece = await Piece.findById(piece.Piece);

      const pieceIsAbleToBeMoved = this.pieceIsAbleToBeMoved(piece);

      
      if(pieceIsAbleToBeMoved){
        const isRightTurn = this.pieceController.validateRightTurn(genericPiece, boardAndGameInfo);
        if (isRightTurn) {
          const validMoves = this.piece.getValidMoves(genericPiece, piece, boardAndGameInfo.board);
          
          const movementInValidMoves = this.piece.newPositionIsInValidMoves(newPosition, validMoves);
          
          if(movementInValidMoves){
            const newPositionKillsPiece = this.piece.newPositionCouldKillsPiece(newPosition, genericPiece.color, boardAndGameInfo.board);
            
            if(newPositionKillsPiece === 'kill'){
              await this.piece.killPiece(newPosition, boardAndGameInfo.board, BoardPiece);
            } else if (newPositionKillsPiece === 'sameColor'){
              throw new CustomError("New position is not valid", 400);
            }
            
            piece.position = newPosition;
            this.changeUpdateIsFirstMove(piece);
            await BoardPiece.findByIdAndUpdate(idPiece, piece);
            await this.switchTurn(piece.Game)
            return piece;
          }

          throw new CustomError("Invalid move", 400); 

        } else {
          throw new CustomError("Is not your turn", 400);
        }
      }

    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
