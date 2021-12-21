import Game from "../models/game";
import Board from "../controller/board";
import Piece from "../controller/piece";
import CustomError from "../errors/customError";
import BoardPiece from "../models/boardPiece";
import PiecesService from "./pieceService";

export default class BoardPieceGameService {
  protected board: Board;
  protected piecesService: PiecesService;
  protected piece: Piece;
  private boardPositionX = 0;
  private boardPositionY = 1;

  constructor() {
    this.board = new Board();
    this.piecesService = new PiecesService();
    this.piece = new Piece();
  }

  renderPiecesInBoard(piecesInBoard: Array<any>, board: Array<any>): any[] {
    for (const pieceToSet of piecesInBoard) {
      if(pieceToSet.isAlive){
        board[pieceToSet.position[this.boardPositionX]][
          pieceToSet.position[this.boardPositionY]
        ] = pieceToSet;
      }
    }
    return board;
  }

  async getPiecesByGame(gameId: string): Promise<any[]> {
    try {
      const boardPieces = await BoardPiece.find({ Game: gameId });
      const boardPiecesAndPiecesInfo = [];

      for (const piece of boardPieces) {
        const genericPieceInfo = await this.piecesService.getPiece(piece.Piece);
        boardPiecesAndPiecesInfo.push({
          name: genericPieceInfo.name,
          color: genericPieceInfo.color,
          moves: genericPieceInfo.moves,
          position: piece.position,
          _id: piece._id,
          Game: piece.Game,
          isAlive: piece.isAlive,
          isFirstMove: piece.isFirstMove,
          isPromoted: piece.isPromoted,
          isPromotedTo: piece.isPromotedTo,
          Piece: piece.Piece,
        });
      }

      return boardPiecesAndPiecesInfo;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getBoardAndGameInfo(gameId: string) {
    try {
      const game = await Game.findById(gameId);
      if (!game) {
        return null;
      }

      const piecesInBoard = await this.getPiecesByGame(gameId);
      
      this.board.initializeBoard();
      const simplifiedBoard = this.renderPiecesInBoard(piecesInBoard, this.board.getBoard());

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

  async createBoardPieces(game: any): Promise<typeof BoardPiece[]> {
    try {
      const pieces = await this.piecesService.getPieces();
      const returnPieces = [];
      for (const piece of pieces) {
        const newBoardPiece = new BoardPiece({
          position: piece.position,
          Game: game._id,
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

  async switchTurn(gameId: string): Promise<any> {
    try {
      const game = await Game.findById(gameId);
      if (game) {
        game.turn = game.turn === "White" ? "Black" : "White";
        return await Game.findByIdAndUpdate(gameId, game);
      }
      return null;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
