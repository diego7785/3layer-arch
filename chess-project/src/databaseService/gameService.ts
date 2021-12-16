import Game from "../models/game";
import Board from "../controller/board";
import BoardPieceService from "./boardPieceService";

export default class GameService {
  private board: Board;
  private boardPieceService: BoardPieceService;

  constructor() {
    this.board = new Board();
    this.boardPieceService = new BoardPieceService();
  }

  async getGames(): Promise<any> {
    try {
      return await Game.find({});
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getGame(id: string): Promise<any> {
    try {
      const game = await Game.findById(id);
      if (!game) {
        return null;
      }

      const completeBoard = await this.boardPieceService.getPiecesByGame(id);
      const simplifiedBoard = this.board.createSimplifiedBoard(
        completeBoard
      );

      const gameWithBoard = {
        game: game,
        board: completeBoard,
        simplifiedBoard: this.board.toString(simplifiedBoard),
      };
      return gameWithBoard;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async createGame(name: String): Promise<any> {
    try {
      const game = new Game({
        name: name,
      });
      await this.boardPieceService.createPieces(game);
      return await game.save();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async deleteGame(id: string): Promise<any> {
    try {
      return await Game.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
