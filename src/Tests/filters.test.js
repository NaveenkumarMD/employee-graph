import { render, screen, fireEvent, within } from "@testing-library/react";
import { createDummyEmployeeList } from "../DataProvider/dummyData";
import { genConfig } from "react-nice-avatar";
import FilterInputs from "../Components/filter-inputs/filter-inputs";

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

test("Filter should be rendered", () => {
    const props = getDummyProps(employees);
    render(<FilterInputs {...{ ...props }} />);
    const searchStringElement =
        screen.getAllByPlaceholderText("Search Employee");

    expect(searchStringElement[0]).toBeInTheDocument();

    fireEvent.change(searchStringElement[0], {
        target: { value: "Test Search" },
    });

    const selectInputElement = screen.getByTestId("selectTeam");
    expect(selectInputElement).toBeInTheDocument();

    const input = within(selectInputElement).getByRole("combobox");
    selectInputElement.focus();

    fireEvent.change(input, { target: { value: employees[0].team } });
    fireEvent.keyDown(selectInputElement, { key: "ArrowDown" });
    fireEvent.keyDown(selectInputElement, { key: "Enter" });
});
