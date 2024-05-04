import { Box, Grid } from "@mui/material";
import React from "react";
import UserCard from "../user-card/user-card";
import { PropTypes } from "prop-types";

import { styles } from "./styles";
import FilterInputs from "../filter-inputs/filter-inputs";

const UsersList = (props) => {
    const { employees } = props;
    return (
        <Box>
            <FilterInputs {...{ ...props }} />
            <Box sx={styles.container}>
                <Grid sx={styles.list} gap={2} container direction={"column"}>
                    {employees.map((data, idx) => {
                        return (
                            <Box key={idx}>
                                <UserCard {...{ idx: idx + 1, ...data }} />
                            </Box>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
    );
};

UsersList.propTypes = {
    employees: PropTypes.Object,
};
export default UsersList;
