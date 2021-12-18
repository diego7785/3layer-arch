import Game from "../models/game";
import BoardService from "./boardService";
import CustomError from "../errors/customError";

export default class GameService extends BoardService{

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
      await this.createPieces(game);
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

  async changeGameStatus(idGame: string, status: string): Promise<any> {
    try {
      const game = await Game.findById(idGame);
      if(game){
        game.status = status;
        await Game.findByIdAndUpdate(idGame, game);
      }
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
