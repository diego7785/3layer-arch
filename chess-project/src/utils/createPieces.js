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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.disconnect = exports.connect = void 0;
var piece_1 = require("../models/piece");
var mongoose = require("mongoose");
function connect() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.connect("mongodb://localhost:27017/chess-game")];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.connect = connect;
function disconnect() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.disconnect()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.disconnect = disconnect;
var pieces = [
    {
        name: "Tower",
        color: "White",
        position: [0, 0],
        moves: ["F"]
    },
    {
        name: "Horse",
        color: "White",
        position: [0, 1],
        moves: ["L"]
    },
    {
        name: "WBishop",
        color: "White",
        position: [0, 2],
        moves: ["D"]
    },
    {
        name: "Queen",
        color: "White",
        position: [0, 3],
        moves: ["F", "D"]
    },
    {
        name: "King",
        color: "White",
        position: [0, 4],
        moves: ["1F", "1D"]
    },
    {
        name: "BBishop",
        color: "White",
        position: [0, 5],
        moves: ["D"]
    },
    {
        name: "Horse",
        color: "White",
        position: [0, 6],
        moves: ["L"]
    },
    {
        name: "Tower",
        color: "White",
        position: [0, 7],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 0],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 1],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 2],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 3],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 4],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 5],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 6],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "White",
        position: [1, 7],
        moves: ["F", "1D"]
    },
    {
        name: "Tower",
        color: "Black",
        position: [7, 0],
        moves: ["F"]
    },
    {
        name: "Horse",
        color: "Black",
        position: [7, 1],
        moves: ["L"]
    },
    {
        name: "WBishop",
        color: "Black",
        position: [7, 2],
        moves: ["D"]
    },
    {
        name: "Queen",
        color: "Black",
        position: [7, 3],
        moves: ["F", "D"]
    },
    {
        name: "King",
        color: "Black",
        position: [7, 4],
        moves: ["1F"]
    },
    {
        name: "BBishop",
        color: "Black",
        position: [7, 5],
        moves: ["D"]
    },
    {
        name: "Horse",
        color: "Black",
        position: [7, 6],
        moves: ["L"]
    },
    {
        name: "Tower",
        color: "Black",
        position: [7, 7],
        moves: ["F"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 0],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 1],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 2],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 3],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 4],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 5],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 6],
        moves: ["F", "1D"]
    },
    {
        name: "Pawn",
        color: "Black",
        position: [6, 7],
        moves: ["F", "1D"]
    },
];
function createPieces() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, pieces_1, piece, newPiece;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connect()];
                case 1:
                    _a.sent();
                    _i = 0, pieces_1 = pieces;
                    _a.label = 2;
                case 2:
                    if (!(_i < pieces_1.length)) return [3 /*break*/, 5];
                    piece = pieces_1[_i];
                    newPiece = new piece_1["default"](piece);
                    return [4 /*yield*/, newPiece.save()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5: return [4 /*yield*/, disconnect()];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, createPieces()];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); })();
