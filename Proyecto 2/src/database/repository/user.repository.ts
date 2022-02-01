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

  public async getAllUsersSimplified(): Promise<User[]> {
    return await this.userRepository.find({select: ["id", "nickname", "assistanceAmount"]});
  }

  public async deleteUser(idUser: string): Promise<DeleteResult> {
    return await this.userRepository.delete(idUser);
  }

  public async filterByNameAndNickname(name: any, nickname: any){
    if(name && nickname){
      return await this.userRepository.find({where: [{name: name, nickname: nickname}]});
    } else if(name){
      return await this.userRepository.find({where: [{name: name}]});
    } else {
      return await this.userRepository.find({where: [{nickname: nickname}]}); 
    }
  }
}
