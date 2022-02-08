import axios from "axios";
import config from "../config";

export default class AttendanceService {
  async getUserAttendances(userId: string) {
    const route: string = `${config.attendance.host}:${config.attendance.port}${config.attendance.route}${userId}`
    return axios
      .get(route)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}
