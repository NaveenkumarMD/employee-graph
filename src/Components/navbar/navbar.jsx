import React from "react";
import { Grid, Typography } from "@mui/material";
import styles from "./navbar.styles";
import { greyscale_900 } from "../../colors";

const NavBar = () => {
    return (
        <Grid sx={styles.container}>
            <Typography sx={{ color: greyscale_900 }} variant="h6">
                Users list
            </Typography>
        </Grid>
    );
};
export default NavBar;
