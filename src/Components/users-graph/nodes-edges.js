import { faker } from "@faker-js/faker";

const position = { x: 0, y: 0 };

export const getInitialNodesAndEdges = (employees) => {
    const nodes = employees.map((employee, idx) => {
        return {
            id: employee.id,
            type: "user-node",
            data: employee,
            position,
        };
    });
    const presentInNodes = (id) => {
        return !!nodes.find((node) => node.id === id);
    };
    const edges = employees
        .map((employee, idx) => {
            if (employee.manager && presentInNodes(employee.manager)) {
                return {
                    id: faker.string.uuid(),
                    source: employee.manager,
                    target: employee.id,
                    type: "smoothstep",
                    animated: true,
                };
            }
        })
        .filter((edge) => !!edge);
    return [nodes, edges];
};

export const filterEmployees = (params, employees) => {
    const employeesChanged = employees.map((employee) => {
        if (params.target === employee.id) {
            return {
                ...employee,
                manager: params.source,
            };
        }
        return employee;
    });
    return employeesChanged;
};
