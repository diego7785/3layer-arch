import express, { Request, Response } from "express";
import GameService from "../databaseService/gameService";
import { connect, disconnect } from "../databaseService/connection";
import Game from "./interfaces/game.interface";

export default class GameRouter {
  private router: express.Router;
  private gameService: GameService;

  constructor() {
    this.router = express.Router();
    this.gameService = new GameService();
  }

  async getGames(req: Request, res: Response): Promise<any> {
    try {
      await connect();
      res.status(200).send(await this.gameService.getGames());
      await disconnect();
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  }

  async getOneGameById(req: Request, res: Response): Promise<any> {
    try {
      await connect();
      const game = await this.gameService.getBoardAndGameInfo(req.params.id);
      if (game) {
        res.status(200).send(game);
      } else {
        res.status(404).send("Game not found");
      }
      await disconnect();
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  }

  async createGame(req: Request, res: Response): Promise<any> {
    try {
      if (req.body) {
        await connect();
        res.status(201).send(await this.gameService.createGame(req.body.name));
        await disconnect();
      } else {
        res.status(400).send("Invalid request, missing name argument in body");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  }

  async deleteGame(req: Request, res: Response): Promise<any> {
    try {
      await connect();
      res.status(200).send(await this.gameService.deleteGame(req.params.id));
      await disconnect();
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  }

  routes(): express.Router {
    this.router.get("/", this.getGames.bind(this));

    this.router.get("/:id", this.getOneGameById.bind(this));

    this.router.post("/", this.createGame.bind(this));

    this.router.delete("/:id", this.deleteGame.bind(this));

    return this.router;
  }
}
