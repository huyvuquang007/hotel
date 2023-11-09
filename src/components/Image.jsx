import React from "react";
import { Grid } from "@mui/material";

function Image({ url, style }) {
    return (
        <Grid style={{ ...style, overflow: "hidden", flexShrink: "0" }}>
            <img
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                src={url}
                alt=""
            />
        </Grid>
    );
}

export default Image;
