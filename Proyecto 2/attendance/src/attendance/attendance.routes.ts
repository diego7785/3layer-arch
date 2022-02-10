import express, { Request, Response } from "express";
import AttendanceService from "../services/attendance.service";

export default class AttendanceRoutes {
  private router: express.Router;
  private attendanceService: AttendanceService;

  constructor() {
    this.router = express.Router();
    this.attendanceService = new AttendanceService();
  }

  async getAttendance(req: Request, res: Response): Promise<void> {
    try{
      const idUser = req.params.id;
      const attendances = await this.attendanceService.getAttendanceByUser(idUser);
      res.status(attendances.status).send({ data: attendances.message });
    } catch (error:any) {
      res.status(500).send({ error: error.message });
    }
  }

  async createAttendance(req: Request, res: Response): Promise<void> {
    try {
      const attendanceInfo = req.body;
      const attendance = await this.attendanceService.createAttendance(
        attendanceInfo
      );
      res.status(attendance.status).send({ data: attendance.message });
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  }

  verifySendDeleteAttendanceParams(params: any): boolean {
    if (params.attendanceId && params.idUser) {
      return true;
    }
    return false;
  }

  verifySendDeleteAllUserAttendancesParams(params: any): boolean {
    if (params.idUser) {
      return true;
    }
    return false;
  }

  async deleteAttendance(req: Request, res: Response): Promise<void> {
    try {
      const sendParams = this.verifySendDeleteAttendanceParams(req.query);
      if (sendParams) {
        const { attendanceId, idUser } = req.query;
        const attendance = await this.attendanceService.deleteAttendance(
          idUser as string,
          attendanceId as string
        );
        res.status(attendance.status).send({ data: attendance.message });
     } else if(this.verifySendDeleteAllUserAttendancesParams(req.query)) {
        const { idUser } = req.query;
        const attendances = await this.attendanceService.deleteAllAttendances(idUser as string);
        res.status(200).send({ data: attendances.message });
      } 
      else {
        res.status(400).send({ error: "At least idUser and attendanceId are required" });
      }
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
  }

  routes(): express.Router {
    this.router.get("/:id", (req: Request, res: Response) => {
      this.getAttendance(req, res);
    });

    this.router.post("/", (req: Request, res: Response) => {
      this.createAttendance(req, res);
    });

    this.router.delete("/", (req: Request, res: Response) => {
      this.deleteAttendance(req, res);
    });

    return this.router;
  }
}
