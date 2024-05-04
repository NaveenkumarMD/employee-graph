import React from "react";
import { Grid } from "@mui/material";
import NavBar from "./Components/navbar/navbar";
import Users from "./Components/users/users";
const App = () => {
    return (
        <Grid>
            <NavBar />
            <Users />
        </Grid>
    );
};
export default App;
