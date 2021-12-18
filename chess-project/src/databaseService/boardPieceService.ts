import CustomError from "../errors/customError";
import PieceController from "../controller/piece";
import GameService from "./gameService";
import BoardService from './boardService';
import BoardPiece from '../models/boardPiece';
import Piece from '../models/piece';

export default class BoardPieceService extends BoardService {
  private pieceController: PieceController;
  private gameService: GameService;

  constructor() {
    super();
    this.pieceController = new PieceController();
    this.gameService = new GameService();
  }

  async movePiece(idPiece: string, newPosition: Array<any>): Promise<any> {
    try {
      const piece = await BoardPiece.findById(idPiece);
      if (!piece) {
        return null;
      }
      const boardAndGameInfo = await this.gameService.getBoardAndGameInfo(piece.Game);

      this.gameService.gameIsCheckMate(boardAndGameInfo);

      await this.gameService.changeGameStatus(piece.Game, 'I');
      
      const idGenericPiece = await Piece.findById(piece.Piece);

      const pieceIsAbleToBeMoved = this.pieceIsAbleToBeMoved(piece);

      if(pieceIsAbleToBeMoved){
        const isValidMove = this.pieceController.validateMove(idGenericPiece, newPosition, boardAndGameInfo);
        if (isValidMove) {
          piece.position = newPosition;
          await BoardPiece.findByIdAndUpdate(idPiece, piece);
          await this.switchTurn(piece.Game)
          return piece;
        } else {
          throw new CustomError("Invalid move", 400);
        }
      }

    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
