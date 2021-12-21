import Game from "../models/game";
import BoardPieceGameService from "./boardPieceGameService";
import CustomError from "../errors/customError";

export default class GameService extends BoardPieceGameService {

  constructor() {
    super();
  }

  async getGames(): Promise<any> {
    try {
      return await Game.find({});
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async createGame(name: string): Promise<any> {
    try {
      const game = new Game({
        name: name,
      });
      await this.createBoardPieces(game);
      return await game.save();
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  gameIsCheckMate(game: any): void {
    if(game.game.checkMate){
      throw new CustomError("Game is checkmate", 400);
    }
  }

  async changeGameStatus(gameId: string, status: string): Promise<any> {
    try {
      const game = await Game.findById(gameId);
      if(game){
        game.status = status;
        await Game.findByIdAndUpdate(gameId, game);
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async deleteGame(gameId: string): Promise<any> {
    try {
      return await Game.findByIdAndRemove(gameId);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
