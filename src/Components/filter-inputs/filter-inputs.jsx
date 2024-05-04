import {
    Autocomplete,
    Box,
    Grid,
    OutlinedInput,
    TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { styles } from "../users-list/styles";
const FilterInputs = (props) => {
    const {
        selectedTeam,
        setSelectedTeam,
        searchString,
        setSearchString,
        setFilteredEmployees,
        employees,
    } = props;
    const [selectOptions, setSelectOptions] = useState([]);
    useEffect(() => {
        const options = employees
            .map((employee) => employee.team)
            .filter((value, index, array) => array.indexOf(value) === index);
        setSelectOptions(options);
    }, []);
    return (
        <Grid container gap={2} m={2} ml={3}>
            <OutlinedInput
                sx={styles.inputStyles}
                startAdornment={<Search sx={styles.searchIcon} />}
                placeholder="Search Employee"
                onChange={(e) => {
                    setSearchString(e.target.value);
                    setFilteredEmployees(e.target.value, selectedTeam);
                }}
                value={searchString}
            />
            <Box sx={{ height: "40px" }} data-testid="selectTeam">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={selectOptions}
                    sx={{ ...styles.inputStyles, width: "180px" }}
                    placeholder="Team"
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            size="small"
                        />
                    )}
                    value={selectedTeam}
                    onChange={(event, newValue) => {
                        setSelectedTeam(newValue);
                        setFilteredEmployees(searchString, newValue);
                    }}
                />
            </Box>
        </Grid>
    );
};

export default FilterInputs;
