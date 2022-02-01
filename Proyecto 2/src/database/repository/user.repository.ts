import { createConnection, DeleteResult, Repository } from "typeorm";
import { User } from "../entities/user.entity";

export class UserRepository {
  userRepository: Repository<User>;

  constructor() {
    createConnection().then((connection) => {
      this.userRepository = connection.getRepository(User);
    });
  }
  public async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public async getUser(idUser: string): Promise<User | undefined> {
    return await this.userRepository.findOne(idUser);
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.userRepository.createQueryBuilder("user")
        .select(["user.id", "user.name", "user.nickname"])
        .getMany();
  }

  public async deleteUser(idUser: string): Promise<DeleteResult> {
    return await this.userRepository.delete(idUser);
  }

  public async getUsersWithAssistance(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
