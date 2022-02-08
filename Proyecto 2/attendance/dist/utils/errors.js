"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = void 0;
function isError(error) {
    if (error instanceof Error) {
        return true;
    }
    return false;
}
exports.isError = isError;
//# sourceMappingURL=errors.js.map