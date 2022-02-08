"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const attendance_service_1 = __importDefault(require("../services/attendance.service"));
class AttendanceRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.attendanceService = new attendance_service_1.default();
    }
    getAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const idUser = req.params.id;
                const attendances = yield this.attendanceService.getAttendanceByUser(idUser);
                res.status(attendances.status).send({ data: attendances.message });
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        });
    }
    createAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendanceInfo = req.body;
                const attendance = yield this.attendanceService.createAttendance(attendanceInfo);
                res.status(attendance.status).send({ data: attendance.message });
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        });
    }
    verifySendDeleteParams(params) {
        if (params.attendanceId && params.idUser) {
            return true;
        }
        return false;
    }
    deleteAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sendParams = this.verifySendDeleteParams(req.query);
                if (sendParams) {
                    const { attendanceId, idUser } = req.query;
                    const attendance = yield this.attendanceService.deleteAttendance(idUser, attendanceId);
                    res.status(attendance.status).send({ data: attendance.message });
                }
                else {
                    res.status(400).send({ error: "idUser and attendanceId are required" });
                }
            }
            catch (error) {
                res.status(500).send({ error: error.message });
            }
        });
    }
    routes() {
        this.router.get("/:id", (req, res) => {
            this.getAttendance(req, res);
        });
        this.router.post("/", (req, res) => {
            this.createAttendance(req, res);
        });
        this.router.delete("/", (req, res) => {
            this.deleteAttendance(req, res);
        });
        return this.router;
    }
}
exports.default = AttendanceRoutes;
//# sourceMappingURL=attendance.routes.js.map