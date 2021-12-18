import express, { Request, Response } from "express";
import { connect, disconnect } from "../databaseService/connection";
import Movement from "./interfaces/movement.interface";
import BoardPiece from "../databaseService/boardPieceService";
import CustomError from "../errors/customError";
import GameService from "../databaseService/gameService";

export default class BoardPiecesRouter {
  private router: express.Router;
  private boardPiece: BoardPiece;

  constructor() {
    this.router = express.Router();
    this.boardPiece = new BoardPiece();
  }

  async movePiece(req: Request, res: Response){
    try {
      await connect();
      if ((req.body as Movement).newPosition) {
        const pieceMoved = await this.boardPiece.movePiece(req.params.id, req.body.newPosition);
        if(!pieceMoved){
          res.status(400).send("Piece not found");
        }
        res.status(200).send(pieceMoved);
      } else {
        res
          .status(400)
          .send(
            "Invalid request, missing newPosition argument in body"
          );
      }
      await disconnect();
    } catch (err: any) {
      console.log(err);
      if(err instanceof CustomError){
        res.status(err.getStatus()).send(err.getMessage());
      } else {
        res.status(500).send('Internal server error');
      }
    } 
  }

  routes(): express.Router {
    this.router.put("/:id", this.movePiece.bind(this));

    return this.router;
  }
}
