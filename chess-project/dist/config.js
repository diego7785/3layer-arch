"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(process.env.PORT);
require('dotenv').config();
console.log(process.env.PORT);
const config = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '5000',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '27017',
        name: process.env.DB_NAME || 'chess'
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map