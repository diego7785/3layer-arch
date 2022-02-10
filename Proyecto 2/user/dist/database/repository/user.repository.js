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
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const attendance_service_1 = __importDefault(require("../../services/attendance.service"));
const user_entity_1 = require("../entities/user.entity");
class UserRepository {
    constructor() {
        (0, typeorm_1.createConnection)().then((connection) => {
            this.userRepository = connection.getRepository(user_entity_1.User);
            this.attendanceService = new attendance_service_1.default();
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userRepository.save(user);
            }
            catch (error) {
                console.log(error);
                return error;
            }
        });
    }
    getUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne(idUser);
            const attendances = yield this.attendanceService.getUserAttendances(idUser);
            const userWithAttendances = Object.assign(Object.assign({}, user), { attendances: attendances.data });
            if (user) {
                return userWithAttendances;
            }
            else {
                return user;
            }
        });
    }
    getAllUsersSimplified() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find({
                select: ["id", "nickname", "assistanceAmount"],
            });
        });
    }
    deleteUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedAttendances = yield this.attendanceService.deleteAttendancesByUser(idUser);
            return yield this.userRepository.delete(idUser);
        });
    }
    filterByNameAndNickname(name, nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name && nickname) {
                return yield this.userRepository.find({
                    where: [{ name: name, nickname: nickname }],
                });
            }
            else if (name) {
                return yield this.userRepository.find({ where: [{ name: name }] });
            }
            else {
                return yield this.userRepository.find({
                    where: [{ nickname: nickname }],
                });
            }
        });
    }
    patchUser(idUser, userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedUser = yield this.userRepository.update(idUser, userInfo);
            return updatedUser;
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map