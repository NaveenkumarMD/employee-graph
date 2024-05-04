import { render, screen } from "@testing-library/react";
import UserCard from "../Components/user-card/user-card";
import { createDummyEmployeeList } from "../DataProvider/dummyData";
import { genConfig } from "react-nice-avatar";
import UserNode from "../Components/users-graph/user-node";
import ReactFlow, { ReactFlowProvider } from "reactflow";

var employees;
beforeAll(async () => {
    employees = createDummyEmployeeList(10);
    employees = employees.map((employee) => {
        return {
            ...employee,
            avatar: genConfig(),
        };
    });
});

test("Graph node should be rendered", async () => {
    render(
        <ReactFlowProvider>
            <UserNode data={employees[0]} />
        </ReactFlowProvider>
    );
    const nodeName = screen.getByTestId("node-name");
    expect(nodeName).toBeInTheDocument();
    const nodeAvatar = screen.getByTestId("node-avatar");
    expect(nodeAvatar).toBeInTheDocument();
    const nodeTeam = screen.getByTestId("node-team");
    expect(nodeTeam).toBeInTheDocument();
});
