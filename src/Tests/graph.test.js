import { render, screen } from "@testing-library/react";
import { createDummyEmployeeList } from "../DataProvider/dummyData";
import { genConfig } from "react-nice-avatar";
import UserGraph from "../Components/users-graph/users-graph";

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

const getDummyProps = (employees) => {
    return {
        employees,
        primaryValues: employees,
        setPrimaryValues: () => {},
        setFilteredEmployees: () => {},
        searchString: "",
        selectedTeam: null,
    };
};
test("graph should be rendered", async () => {
    const props = getDummyProps(employees);
    render(<UserGraph {...{ ...props }} />);
});
