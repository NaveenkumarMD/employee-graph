import { render, screen } from "@testing-library/react";
import UserCard from "../Components/user-card/user-card";
import { createDummyEmployeeList } from "../DataProvider/dummyData";
import { genConfig } from "react-nice-avatar";

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

test("List card should be rendered", async () => {
    render(<UserCard {...{ ...employees[0] }} />);
    const indexElement = screen.getByTestId("index");
    const nameElement = screen.getByTestId("name");
    const teamElement = screen.getByTestId("team");

    expect(indexElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(teamElement).toBeInTheDocument();
});

test("Avatar should contain svg", () => {
    render(<UserCard {...{ ...employees[0] }} />);
    const avatarElement = screen.getByTestId("avatar");
    const svgElement = avatarElement.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
});
