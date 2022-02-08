import { UserRepository } from "../database/repository/user.repository";
import { buildResponse } from "../utils/response";
import { User } from "../database/entities/user.entity";

export class UserService {
  private userRepo: UserRepository;

  constructor() {
    this.userRepo = new UserRepository();
  }

  public async createUser(req: any): Promise<any> {
    try {
      if (!req.body.name || !req.body.nickname) {
        return buildResponse(400, "Name and nickname are required");
      } else {
        const { name, nickname } = req.body;
        const user = new User();
        user.name = name;
        user.nickname = nickname;
        const userCreated = await this.userRepo.createUser(user);
        if (isError(userCreated)) {
          return buildResponse(500, (userCreated as Error).message);
        }
        return buildResponse(201, user);
      }
    } catch (error: any) {
      return buildResponse(500, error.message);
    }
  }

  public async getAllUsers(req: any): Promise<any> {
    try {
      if (!req.query.name && !req.query.nickname) {
        const users = await this.userRepo.getAllUsersSimplified();
        return buildResponse(200, users);
      } else {
        const { name, nickname } = req.query;
        const filteredUsers = await this.userRepo.filterByNameAndNickname(
          name,
          nickname
        );
        if (filteredUsers.length > 0) {
          buildResponse(200, filteredUsers);
        } else {
          buildResponse(404, "User not found");
        }
      }
    } catch (error: any) {
      buildResponse(500, error.message);
    }
  }
}
