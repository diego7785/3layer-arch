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
const attendance_schema_1 = __importDefault(require("./models/attendance.schema"));
class DatabaseService {
    static getInstance() {
        if (!DatabaseService._instance) {
            DatabaseService._instance = new DatabaseService();
        }
        return DatabaseService._instance;
    }
    getAttendanceModel() {
        return attendance_schema_1.default;
    }
    createAttendance(attendanceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(yield attendance_schema_1.default.find({}));
            return new attendance_schema_1.default();
        });
    }
}
exports.default = DatabaseService;
//# sourceMappingURL=attendance.service.js.map