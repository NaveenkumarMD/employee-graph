import { greyscale_200, greyscale_600, greyscale_900 } from "../../colors";

export const styles = {
    list: {
        margin: "24px",
        borderRight: `1px solid ${greyscale_200}`,
        width: "430px",
    },
    container: {
        height: "90vh",
        overflow: "scroll",
        scrollbarWidth: "0",
    },
    searchIcon: {
        color: greyscale_600,
    },
    inputStyles: {
        fontSize: "14px",
        color: greyscale_900,
        height: "40px",
        borderRadius: 1,
    },
};
