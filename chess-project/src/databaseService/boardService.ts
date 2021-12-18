import Game from "../models/game";
import Board from "../controller/board";
import CustomError from "../errors/customError";
import BoardPiece from "../models/boardPiece";
import PiecesService from "./pieceService";

export default class BoardService {
  private board: Board;
  protected piecesService: PiecesService;

  constructor() {
    this.board = new Board();
    this.piecesService = new PiecesService();
  }

  async getPiecesByGame(game: string): Promise<any[]> {
    try {
      const boardPieces = await BoardPiece.find({ Game: game });
      const boardPiecesInfo = [];

      for (const piece of boardPieces) {
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
          Piece: piece.Piece,
        });
      }

      return boardPiecesInfo;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  pieceIsAbleToBeMoved(piece: any): boolean {
    if (piece.isCaptured) {
      throw new CustomError("Piece is captured", 400);
    } else if (!piece.isAlive) {
      throw new CustomError("Piece is dead", 400);
    } else if (piece.isFirstMove) {
      piece.isFirstMove = false;
    }

    return true;
  }

  async getBoardAndGameInfo(id: string) {
    try {
      const game = await Game.findById(id);
      if (!game) {
        return null;
      }

      const piecesInBoard = await this.getPiecesByGame(id);

      const simplifiedBoard = this.board.renderPiecesInBoard(piecesInBoard);

      const gameWithBoard = {
        game: game,
        board: simplifiedBoard,
      };
      return gameWithBoard;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async createPieces(pGame: any): Promise<typeof BoardPiece[]> {
    try {
      const pieces = await this.piecesService.getPieces();
      const returnPieces = [];
      for (const piece of pieces) {
        const newBoardPiece = new BoardPiece({
          position: piece.position,
          Game: pGame._id,
          Piece: piece._id,
        });
        returnPieces.push(newBoardPiece);
        await newBoardPiece.save();
      }
      return returnPieces;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async switchTurn(id: string): Promise<any>{
    try {
      const game = await Game.findById(id);
      if(game){
        game.turn = game.turn === "White" ? "Black" : "White";
        return await Game.findByIdAndUpdate(id, game);
      }
      return null;
    } catch(err){
      console.log(err);
      throw err;
    }
  }
}
