const config = {
    host: "localhost",
    port: 27017,
    name: "attendance",
    ampq: {
        host: "localhost",
        port: 5672,
        username: "admin",
        password: "123456",
        exchange: "attendances_exchange",
        route: "attendance_route",
        queue: "attendances_queue"
    }
};

export default config;
