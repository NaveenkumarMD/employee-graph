import { Box, Grid, Tooltip, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Handle, Position } from "reactflow";
import { styles } from "./styles";
import Avatar from "react-nice-avatar";

const UserNode = ({ data }) => {
    const MemoizedAvatar = useMemo(() => {
        return <Avatar style={styles.avatar} {...data.avatar} />;
    }, []);

    return (
        <Box data-testid="user-node">
            <Handle
                type="target"
                position={Position.Top}
                style={styles.handle}
            />
            <Box sx={styles.container}>
                <Box style={styles.circle}></Box>
                <Box data-testid="node-avatar">{MemoizedAvatar}</Box>
                <Box sx={styles.info}>
                    <Grid
                        container
                        direction="column"
                        gap={1}
                        alignContent="center"
                    >
                        <Tooltip title={data.name}>
                            <Typography
                                sx={styles.name}
                                data-testid="node-name"
                            >
                                {data.name.substring(0, 20) + "..."}
                            </Typography>
                        </Tooltip>
                        <Tooltip title={data.team} data-testid="node-team">
                            <Typography sx={styles.description}>
                                {data.team.substring(0, 20) + "..."}
                            </Typography>
                        </Tooltip>
                        <Box>
                            <Tooltip title={data.designation}>
                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                    sx={styles.chip}
                                >
                                    <Typography sx={{ fontSize: "12px" }}>
                                        {data.designation.substring(0, 12) +
                                            ".."}
                                    </Typography>
                                </Grid>
                            </Tooltip>
                        </Box>
                    </Grid>
                </Box>
            </Box>
            <Handle
                type="source"
                position={Position.Bottom}
                id="a"
                style={styles.handle}
            />
        </Box>
    );
};
export default UserNode;
