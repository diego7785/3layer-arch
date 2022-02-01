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
    const { name, nickname } = req.body;
    const user = new User();
    user.name = name;
    user.nickname = nickname;
    await this.userRepository.createUser(user);
    res.status(201).send({ data: user });
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userRepository.getAllUsers();
    res.status(200).send({ data: users });
  }

  async getUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await this.userRepository.getUser(id);
    if(user){
        res.status(200).send({ data: user });
    } else {
        res.status(404).send({ data: "User not found" });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deleted = await this.userRepository.deleteUser(id);
    if(deleted.affected === 1){
        res.status(200).send({ data: "User deleted" });
    } else{
        res.status(400).send({ data: "Cannot delete user" });
    }
  }

  async getUsersWithAssistance(req: Request, res: Response): Promise<void> {
    const users = await this.userRepository.getUsersWithAssistance();
    res.status(200).send({ data: users });
  }

  routes(): express.Router {
    this.router.post("/", (req, res) => {
      this.createUser(req, res);
    });

    this.router.get("/", (req, res) => {
      this.getAllUsers(req, res);
    });

    this.router.get("/assistance", (req, res) => {
      this.getUsersWithAssistance(req, res);
    });
    
    this.router.get("/:id", (req, res) => {
      this.getUser(req, res);
    });

    this.router.delete("/:id", (req, res) => {
      this.deleteUser(req, res);
    });


    return this.router;
  }
}
