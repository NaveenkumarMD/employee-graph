import { createServer } from "miragejs";
import { createDummyEmployeeList } from "./dummyData";

createServer({
    seeds(server) {
        server.db.loadData({
            employees: createDummyEmployeeList(50),
        });
    },
    namespace: "api",
    routes() {
        this.get("/employees", (schema) => {
            return schema.db.employees;
        });
        this.post("/update", (schema, request) => {
            let employees = JSON.parse(request.requestBody);
            schema.db.emptyData();
            return schema.db.loadData({
                employees,
            });
        });
    },
});
