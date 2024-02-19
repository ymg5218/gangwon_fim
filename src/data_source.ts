import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "oracle",
    host: "localhost",
    port: 1030,
    username: "YOUM",
    password: "passwd",
    database: "강원식자재마트",
    synchronize: true,
    logging: true,
    entities: [],
})