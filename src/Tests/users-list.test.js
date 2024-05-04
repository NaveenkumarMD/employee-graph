import { render, screen } from "@testing-library/react";
import { createDummyEmployeeList } from "../DataProvider/dummyData";
import { genConfig } from "react-nice-avatar";
import UsersList from "../Components/users-list/users-list";

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
        selectedTeam: employees[0].team,
        setSelectedTeam: () => {},
        searchString: "",
        setSearchString: () => {},
        setFilteredEmployees: () => {},
        employees: employees,
    };
};
test("Users list should render all user cards", async () => {
    const props = getDummyProps(employees);
    render(<UsersList {...{ ...props }} />);
    const searchStringElement =
        screen.getAllByPlaceholderText("Search Employee");
    expect(searchStringElement[0]).toBeInTheDocument();

    const selectInputElement = screen.getByTestId("selectTeam");
    expect(selectInputElement).toBeInTheDocument();

    const userCards = screen.getAllByTestId("user-card");
    expect(userCards.length).toBe(10);
});
