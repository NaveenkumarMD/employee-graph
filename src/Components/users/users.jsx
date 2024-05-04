import { Grid, avatarClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import UsersList from "../users-list/users-list";
import UsersGraph from "../users-graph/users-graph";
import { genConfig } from "react-nice-avatar";

const Users = () => {
    const [employees, setEmployees] = useState(null);
    const [primaryValues, setPrimaryValues] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchString, setSearchString] = useState("");
    const [selectedTeam, setSelectedTeam] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await fetch("/api/employees");
                const employees = await res.json();
                const emplwithAvatar = employees.map((employee) => {
                    return {
                        ...employee,
                        avatar: genConfig(),
                    };
                });
                setEmployees(emplwithAvatar);
                setPrimaryValues(emplwithAvatar);
                setFilteredEmployees(searchString, selectedTeam);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    const setFilteredEmployees = (
        searchString,
        selectedTeam,
        primaryValuesParam = null
    ) => {
        if (primaryValuesParam === null) {
            primaryValuesParam = primaryValues;
        }
        var filteredEmployees = primaryValuesParam.filter((employee) => {
            if (selectedTeam && employee.team !== selectedTeam) {
                return false;
            }
            if (
                searchString &&
                !employee.name
                    .toLowerCase()
                    .includes(searchString.toLowerCase())
            ) {
                return false;
            }
            return true;
        });
        setEmployees(filteredEmployees);
    };

    if (isLoading || !employees) {
        return "Loading...";
    }
    return (
        <Grid container>
            <UsersList
                {...{
                    selectedTeam,
                    setSelectedTeam,
                    searchString,
                    setSearchString,
                    setFilteredEmployees,
                    employees,
                }}
            />
            <UsersGraph
                {...{
                    selectedTeam,
                    setSelectedTeam,
                    searchString,
                    setSearchString,
                    setFilteredEmployees,
                    setEmployees,
                    primaryValues,
                    setPrimaryValues,
                    employees,
                }}
            />
        </Grid>
    );
};
export default Users;
