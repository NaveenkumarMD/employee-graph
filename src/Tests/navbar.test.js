import { screen, render } from "@testing-library/react";

import NavBar from "../Components/navbar/navbar";

test("Navbar renders successfuly", () => {
    render(<NavBar />);
    const title = screen.getByText("Users list");
    expect(title).toBeInTheDocument();
});
