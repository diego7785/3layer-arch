import { createConnection, DeleteResult, Repository } from "typeorm";
import AttendanceService from "../../services/attendance.service";
import { User } from "../entities/user.entity";

export class UserRepository {
  userRepository: Repository<User>;
  private attendanceService: AttendanceService;

  constructor() {
    createConnection().then((connection) => {
      this.userRepository = connection.getRepository(User);
      this.attendanceService = new AttendanceService();
    });
  }

  public async createUser(user: User): Promise<User | Error> {
    try {
      return await this.userRepository.save(user);
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }

  public async getUser(idUser: string): Promise<any> {
    const user = await this.userRepository.findOne(idUser);
    const attendances = await this.attendanceService.getUserAttendances(idUser);
    const userWithAttendances = {
      ...user,
      attendances: attendances.data,
    };
    return userWithAttendances;
  }

  public async getAllUsersSimplified(): Promise<User[]> {
    return await this.userRepository.find({
      select: ["id", "nickname", "assistanceAmount"],
    });
  }

  public async deleteUser(idUser: string): Promise<DeleteResult> {
    return await this.userRepository.delete(idUser);
  }

  public async filterByNameAndNickname(name: any, nickname: any) {
    if (name && nickname) {
      return await this.userRepository.find({
        where: [{ name: name, nickname: nickname }],
      });
    } else if (name) {
      return await this.userRepository.find({ where: [{ name: name }] });
    } else {
      return await this.userRepository.find({
        where: [{ nickname: nickname }],
      });
    }
  }

  public async patchUser(idUser: string, userInfo: Object): Promise<any> {
    const updatedUser = await this.userRepository.update(idUser, userInfo); 
    
    return updatedUser;
  }
}
