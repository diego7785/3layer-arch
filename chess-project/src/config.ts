import * as dotenv from "dotenv";

dotenv.config({path: "./.env"});


const config = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '5000',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '27017',
        name: process.env.DB_NAME || 'chess'
    }
};

export default config 

