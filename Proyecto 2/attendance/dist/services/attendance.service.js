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
const amqp_service_1 = __importDefault(require("./amqp.service"));
const attendance_repository_1 = __importDefault(require("../database/repositories/attendance.repository"));
const errors_1 = require("../utils/errors");
const response_1 = require("../utils/response");
class AttendanceService {
    constructor() {
        this.attendanceRepo = new attendance_repository_1.default();
    }
    getAttendanceByUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendances = yield this.attendanceRepo.getAttendanceByUser(idUser);
                return (0, response_1.buildResponse)(200, attendances);
            }
            catch (error) {
                console.log(error);
                return (0, response_1.buildResponse)(500, error.message);
            }
        });
    }
    getAttendanceById(attendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield this.attendanceRepo.getAttendanceById(attendanceId);
                return (0, response_1.buildResponse)(200, attendance);
            }
            catch (error) {
                console.log(error);
                return (0, response_1.buildResponse)(500, error.message);
            }
        });
    }
    createAttendance(attendanceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wasPublished = yield (0, amqp_service_1.default)(attendanceInfo);
                if ((0, errors_1.isError)(wasPublished)) {
                    return (0, response_1.buildResponse)(500, "Error publishing attendance");
                }
                else {
                    const attendance = yield this.attendanceRepo.createAttendance(attendanceInfo);
                    return (0, response_1.buildResponse)(201, attendance);
                }
            }
            catch (error) {
                console.log(error);
                return (0, response_1.buildResponse)(500, error.mesage);
            }
        });
    }
    verifyTaskDeletedBelongsToUser(idUser, attendance) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attedance = yield this.attendanceRepo.getAttendanceById(attendance);
                if (attedance) {
                    if (attedance.idUser === idUser) {
                        return true;
                    }
                    return false;
                }
                return new Error("Attendance does not exist");
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
    performDeleteAttendance(idUser, attendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (yield this.verifyTaskDeletedBelongsToUser(idUser, attendanceId)) {
                    const attendance = yield this.attendanceRepo.deleteAttendance(attendanceId);
                    return (0, response_1.buildResponse)(200, "Attendance deleted successfully");
                }
                else {
                    return (0, response_1.buildResponse)(401, "Attendance does not belong to user");
                }
            }
            catch (error) {
                console.log(error);
                return (0, response_1.buildResponse)(500, error.message);
            }
        });
    }
    deleteAttendance(idUser, attendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskCouldBeDeleted = yield this.verifyTaskDeletedBelongsToUser(idUser, attendanceId);
                if ((0, errors_1.isError)(taskCouldBeDeleted)) {
                    return (0, response_1.buildResponse)(404, taskCouldBeDeleted.message);
                }
                return yield this.performDeleteAttendance(idUser, attendanceId);
            }
            catch (error) {
                console.log(error);
                return (0, response_1.buildResponse)(500, error.message);
            }
        });
    }
}
exports.default = AttendanceService;
//# sourceMappingURL=attendance.service.js.map