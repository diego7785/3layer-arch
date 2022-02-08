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
exports.updateAttendanceAmount = exports.getUserById = void 0;
const axios_1 = __importDefault(require("axios"));
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = `http://localhost:3000/api/user/${id}`;
        return axios_1.default
            .get(route)
            .then((res) => res.data)
            .catch((err) => console.log(err));
    });
}
exports.getUserById = getUserById;
function updateAttendanceAmount(id, ammount) {
    return __awaiter(this, void 0, void 0, function* () {
        const route = `http://localhost:3000/api/user/${id}`;
        return axios_1.default
            .patch(route, {
            assistanceAmount: ammount,
        })
            .then((res) => res.data)
            .catch((err) => console.log(err));
    });
}
exports.updateAttendanceAmount = updateAttendanceAmount;
//# sourceMappingURL=user.service.js.map