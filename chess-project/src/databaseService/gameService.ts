import Game from "../models/game";
import { createPieces } from "./boardPieceService";
import { setPieces } from "../controller/board";
import { getPiecesByGame } from "./boardPieceService";

export async function getGames(): Promise<any> {
  try {
    return await Game.find({});
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getGame(id: string): Promise<any> {
  try {
    const game = await Game.findById(id);
    if(!game) {
      return null
    }
    const gameWithBoard = {
      game: game,
      board: await getPiecesByGame(id)
    }
    return gameWithBoard;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function createGame(name: String): Promise<any> {
  try {
    const game = new Game({
      name: name,
    });
    await createPieces(game);
    return await game.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteGame(id: string): Promise<any> {
  try {
    const game = await Game.findById(id);
    return await Game.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
