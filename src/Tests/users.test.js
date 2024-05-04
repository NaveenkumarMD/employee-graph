import { render, screen } from "@testing-library/react";

import Users from "../Components/users/users";

test.only("Users component should render Loading text", async () => {
    render(<Users />);
    const loadingText = screen.getAllByText("Loading...")[0];
    expect(loadingText).toBeVisible();
});
