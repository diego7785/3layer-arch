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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
class UserRepository {
    constructor() {
        (0, typeorm_1.createConnection)().then((connection) => {
            this.userRepository = connection.getRepository(user_entity_1.User);
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.save(user);
        });
    }
    getUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne(idUser);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.createQueryBuilder("user")
                .select(["user.id", "user.name", "user.nickname"])
                .getMany();
        });
    }
    deleteUser(idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.delete(idUser);
        });
    }
    getUsersWithAssistance() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.find();
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map