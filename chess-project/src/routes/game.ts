import express from "express";
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

  routes(): express.Router {
    this.router.get("/", async (req, res) => {
      try {
        await connect();
        res.status(200).send(await this.gameService.getGames());
        await disconnect();
      } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
      }
    });

    this.router.get("/:id", async (req, res) => {
      try {
        await connect();
        const game = await this.gameService.getGame(req.params.id);
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
    });

    this.router.post("/", async (req, res) => {
      try {
        if ((req.body as Game).name) {
          await connect();
          res
            .status(201)
            .send(await this.gameService.createGame(req.body.name));
          await disconnect();
        } else {
          res
            .status(400)
            .send("Invalid request, missing name argument in body");
        }
      } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
      }
    });

    this.router.delete("/:id", async (req, res) => {
      try {
        await connect();
        res.status(200).send(await this.gameService.deleteGame(req.params.id));
        await disconnect();
      } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
      }
    });

    return this.router;
  }
}
