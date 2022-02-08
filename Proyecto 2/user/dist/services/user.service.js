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
exports.UserService = void 0;
const user_repository_1 = require("../database/repository/user.repository");
const response_1 = require("../utils/response");
const user_entity_1 = require("../database/entities/user.entity");
class UserService {
    constructor() {
        this.userRepo = new user_repository_1.UserRepository();
    }
    createUser(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.name || !req.body.nickname) {
                    return (0, response_1.buildResponse)(400, "Name and nickname are required");
                }
                else {
                    const { name, nickname } = req.body;
                    const user = new user_entity_1.User();
                    user.name = name;
                    user.nickname = nickname;
                    const userCreated = yield this.userRepo.createUser(user);
                    if (isError(userCreated)) {
                        return (0, response_1.buildResponse)(500, userCreated.message);
                    }
                    return (0, response_1.buildResponse)(201, user);
                }
            }
            catch (error) {
                return (0, response_1.buildResponse)(500, error.message);
            }
        });
    }
    getAllUsers(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.query.name && !req.query.nickname) {
                    const users = yield this.userRepo.getAllUsersSimplified();
                    return (0, response_1.buildResponse)(200, users);
                }
                else {
                    const { name, nickname } = req.query;
                    const filteredUsers = yield this.userRepo.filterByNameAndNickname(name, nickname);
                    if (filteredUsers.length > 0) {
                        (0, response_1.buildResponse)(200, filteredUsers);
                    }
                    else {
                        (0, response_1.buildResponse)(404, "User not found");
                    }
                }
            }
            catch (error) {
                (0, response_1.buildResponse)(500, error.message);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map