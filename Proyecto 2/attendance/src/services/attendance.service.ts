import AttendanceSchema from "../database/models/attendance.schema";
import publish from "./amqp.service";
import AttendanceRepository from "../database/repositories/attendance.repository";
import { isError } from "../utils/errors";
import { buildResponse } from "../utils/response";

export default class AttendanceService {
  private attendanceRepo: AttendanceRepository;
  constructor() {
    this.attendanceRepo = new AttendanceRepository();
  }

  async getAttendanceByUser(idUser: string): Promise<any> {
    try {
      const attendances = await this.attendanceRepo.getAttendanceByUser(idUser);
      // if(attendances.length > 0){
      return buildResponse(200, attendances);
      // }
      //  else {
      //   return buildResponse(404, "No attendances found");
      // }
    } catch (error: any) {
      console.log(error);
      return buildResponse(500, error.message);
    }
  }

  async getAttendanceById(attendanceId: string): Promise<any> {
    try {
      const attendance = await this.attendanceRepo.getAttendanceById(
        attendanceId
      );
      return buildResponse(200, attendance);
    } catch (error: any) {
      console.log(error);
      return buildResponse(500, error.message);
    }
  }

  async createAttendance(
    attendanceInfo: typeof AttendanceSchema
  ): Promise<any> {
    try {
      const wasPublished = await publish(attendanceInfo, "add");
      if (isError(wasPublished)) {
        return buildResponse(500, "Error publishing attendance");
      } else {
        const attendance = await this.attendanceRepo.createAttendance(
          attendanceInfo
        );
        return buildResponse(201, attendance);
      }
    } catch (error: any) {
      console.log(error);
      return buildResponse(500, error.mesage);
    }
  }

  async verifyTaskDeletedBelongsToUser(
    idUser: string,
    attendance: any
  ): Promise<boolean | Error> {
    try {
      const attedance = await this.attendanceRepo.getAttendanceById(attendance);
      if (attedance) {
        if (attedance.idUser === idUser) {
          return true;
        }
        return false;
      }
      return new Error("Attendance does not exist");
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }

  async performDeleteAttendance(
    idUser: string,
    attendanceId: string
  ): Promise<any> {
    try {
      if (await this.verifyTaskDeletedBelongsToUser(idUser, attendanceId)) {
        const attendance = await this.attendanceRepo.deleteAttendance(
          attendanceId
        );
        const wasPublished = await publish(attendance, "delete");
        if (isError(wasPublished)) {
          return buildResponse(500, "Error publishing attendance");
        } else {
          return buildResponse(200, "Attendance deleted successfully");
        }
      } else {
        return buildResponse(401, "Attendance does not belong to user");
      }
    } catch (error: any) {
      console.log(error);
      return buildResponse(500, error.message);
    }
  }

  async deleteAttendance(idUser: string, attendanceId: string): Promise<any> {
    try {
      const taskCouldBeDeleted = await this.verifyTaskDeletedBelongsToUser(
        idUser,
        attendanceId
      );
      if (isError(taskCouldBeDeleted)) {
        return buildResponse(404, (taskCouldBeDeleted as Error).message);
      }

      return await this.performDeleteAttendance(idUser, attendanceId);
    } catch (error: any) {
      console.log(error);
      return buildResponse(500, error.message);
    }
  }

  async deleteAllAttendances(idUser: string): Promise<any> {
    try {
      return await this.attendanceRepo.deleteAllUserAttendances(idUser);
    } catch (error: any) {
      console.log(error);
      return buildResponse(500, error.message);
    }
  }
}
