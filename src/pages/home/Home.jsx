import React from "react";
import Layout from "../../layout/Layout";
import { Grid } from "@mui/material";
import { ButtonStyled, Text25w400 } from "../../style/style";
import BasicSlider from "./Banner2";
import Introduce from "./Introduce";
import FeedBack from "./FeedBack";

function Home() {
    return (
        <Grid>
            {/* <Banner /> */}
            <BasicSlider />
            <Introduce />
            <FeedBack />
        </Grid>
    );
}

export default Home;
