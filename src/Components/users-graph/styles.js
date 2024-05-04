import {
    greyscale_100,
    greyscale_500,
    greyscale_400,
    greyscale_700,
    greyscale_800,
    greyscale_200,
} from "../../colors";
export const styles = {
    handle: {
        backgroundColor: greyscale_800,
    },
    container: {
        width: "150px",
        height: "200px",
        backgroundColor: greyscale_200,
        border: `1px solid ${greyscale_400}`,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
    },
    circle: {
        position: "absolute",
        width: "200px",
        height: "130px",
        backgroundColor: greyscale_100,
        borderRadius: "100%",
        top: "-20%",
        left: "-16%",
    },
    avatar: {
        height: "50px",
        width: "50px",
        position: "absolute",
        top: "20px",
        left: "50px",
        border: `1px solid ${greyscale_500}`,
    },
    info: {
        marginTop: "100px",
        alignItems: "center",
        textAlign: "center",
    },
    name: {
        color: greyscale_800,
        fontSize: "12px",
    },
    description: {
        color: greyscale_700,
        fontSize: "10px",
    },
    chip: {
        height: "20px",
        color: "#5157D2",
        backgroundColor: "#EDEEFB",
        borderRadius: "5px",
        width: "fit-content",
        padding: "0px 8px",
        marginTop: "2px",
    },
};
