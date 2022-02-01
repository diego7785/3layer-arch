import express, { Request, Response } from "express";
import { User } from "../database/entities/user.entity";
import { UserRepository } from "../database/repository/user.repository";

export default class UserRoutes {
  private router: express.Router;
  private userRepository: UserRepository;

  constructor() {
    this.router = express.Router();
    this.userRepository = new UserRepository();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    console.log(req.body.name, req.body.nickname);
    const { name, nickname } = req.body;
    console.log(name,nickname)
    const user = new User();
    user.name = name;
    user.nickname = nickname;
    await this.userRepository.createUser(user);
    res.status(201).send({ data: user });
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    if (!req.query.name && !req.query.nickname) {
      const users = await this.userRepository.getAllUsersSimplified();
      res.status(200).send({ data: users });
    } else {
      const { name, nickname } = req.query;
      const filteredUsers = await this.userRepository.filterByNameAndNickname(
        name,
        nickname
      );
      if (filteredUsers.length > 0) {
        res.status(200).send({ data: filteredUsers });
      } else {
        res.status(404).send({ data: "User not found" });
      }
    }
  }

  async getUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await this.userRepository.getUser(id);
    if (user) {
      res.status(200).send({ data: user });
    } else {
      res.status(404).send({ data: "User not found" });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deleted = await this.userRepository.deleteUser(id);
    if (deleted.affected === 1) {
      res.status(200).send({ data: "User deleted" });
    } else {
      res.status(404).send({ data: "User not found" });
    }
  }

  routes(): express.Router {
    this.router.post("/", (req: Request, res: Response) => {
      this.createUser(req, res);
    });

    this.router.get("/", (req: Request, res: Response) => {
      this.getAllUsers(req, res);
    });

    this.router.get("/:id", (req: Request, res: Response) => {
      this.getUser(req, res);
    });

    this.router.delete("/:id", (req: Request, res: Response) => {
      this.deleteUser(req, res);
    });

    return this.router;
  }
}
