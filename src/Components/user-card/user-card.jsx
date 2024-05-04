import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import Avatar from "react-nice-avatar";
import { styles } from "./styles";

const UserCard = (props) => {
    const { id, name, designation, team, idx, avatar } = props;
    return (
        <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={styles.container}
            data-testid="user-card"
        >
            <Box>
                <Grid container gap={1} alignItems="center">
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        sx={styles.sno}
                        data-testid="index"
                    >
                        <Typography sx={{ fontSize: "12px" }}>{idx}</Typography>
                    </Grid>
                    <Box data-testid="avatar">
                        <Avatar
                            style={{ width: "50px", height: "50px" }}
                            {...avatar}
                        />
                    </Box>
                    <Grid>
                        <Tooltip title={name}>
                            <Typography sx={styles.name} data-testid="name">
                                {name?.substring(0, 10) + ".."}
                            </Typography>
                        </Tooltip>
                        <Typography sx={styles.id}>
                            {"... " + id?.substring(id.length - 4)}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid>
                <Tooltip title={team}>
                    <Typography sx={styles.id} data-testid="team">
                        {team?.substring(0, 8) + ".."}
                    </Typography>
                </Tooltip>
                <Tooltip title={designation} data-testid="designation">
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        sx={styles.chip}
                    >
                        <Typography sx={{ fontSize: "12px" }}>
                            {designation?.substring(0, 8) + ".."}
                        </Typography>
                    </Grid>
                </Tooltip>
            </Grid>
        </Grid>
    );
};

export default UserCard;
