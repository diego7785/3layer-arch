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
const attendance_schema_1 = __importDefault(require("../models/attendance.schema"));
class AttendanceRepository {
    getAttendanceByUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendances = yield attendance_schema_1.default.find({ idUser: idUser });
                return attendances;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getAttendanceById(attendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_schema_1.default.findById(attendanceId);
                return attendance;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    createAttendance(attendanceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = new attendance_schema_1.default(attendanceInfo);
                attendance.save();
                return attendance;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    deleteAttendance(attendanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const attendance = yield attendance_schema_1.default.findByIdAndDelete(attendanceId);
                return attendance;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.default = AttendanceRepository;
//# sourceMappingURL=attendance.repository.js.map