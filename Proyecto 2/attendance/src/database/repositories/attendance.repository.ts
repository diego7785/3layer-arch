import AttendanceSchema from "../models/attendance.schema";

export default class AttendanceRepository {
  async getAttendanceByUser(idUser: string): Promise<any> {
    try {
      const attendances = await AttendanceSchema.find({ idUser: idUser });
      return attendances;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAttendanceById(attendanceId: string): Promise<any> {
    try {
      const attendance = await AttendanceSchema.findById(attendanceId);
      return attendance;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createAttendance(
    attendanceInfo: typeof AttendanceSchema
  ): Promise<any> {
    try {
      const attendance = new AttendanceSchema(attendanceInfo);
      attendance.save();
      return attendance;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteAttendance(attendanceId: string) {
      try{
        const attendance = await AttendanceSchema.findByIdAndDelete(
            attendanceId
          );
          return attendance;
      } catch(error){
          console.log(error);
          throw error;
      }
  }

  async deleteAllUserAttendances(idUser: string) {
    try{
      const attendances = await AttendanceSchema.deleteMany({ idUser: idUser });
      return attendances;
    } catch(error){
        console.log(error);
        throw error;
    }
  }
}
