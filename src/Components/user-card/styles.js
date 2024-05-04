import { greyscale_800, greyscale_600, greyscale_900 } from "../../colors";

export const styles = {
    container: {
        width: "400px",
        height: "80px",
        border: "2px solid transparent",
        borderRadius: 2,
        cursor: "pointer",
        padding: 2,
        "&:hover": {
            border: "2px solid #5157D2",
        },
    },
    id: {
        color: greyscale_600,
        fontSize: "14px",
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
    sno: {
        backgroundColor: "#e6e6e6",
        width: "20px",
        height: "20px",
        borderRadius: "4px",
        color: greyscale_800,
    },
    name: {
        color: greyscale_900,
    },
};
