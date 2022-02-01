
import { Connection, createConnection } from "typeorm";
import { User } from './entities/user.entity';

export default class DatabaseConnection {
    public async connect(): Promise<Connection> {
        return await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "ProyectoBackend",
            entities: [
                User
            ],
            synchronize: true,
            logging: false
        })
    }
}
