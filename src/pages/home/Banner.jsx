import { Container, Grid } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import {
    ButtonStyled,
    Text154w700,
    Text25w400,
    Text50w400,
    Text60w700white,
} from "../../style/style";

function Banner() {
    const settings = {
        // arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // spacing: 10,
        autoplay: true,
        autoplaySpeed: 2000,
        // centerMode: true,
        // centerPadding: '20px',
    };

    return (
        <Grid sx={{}}>
            <Container sx={{ position: "relative" }}>
                <Grid
                    sx={{
                        position: "absolute",
                        top: "100px",
                        left: "0",
                        zIndex: "1000",
                    }}
                >
                    <Text50w400>WELCOME TO</Text50w400>
                    <Text154w700>LUXURY</Text154w700>
                    <Text60w700white>HOTELS</Text60w700white>
                    <Text25w400 sx={{ width: "400px" }}>
                        Book your stay and enjoy Luxury redefined at the most
                        affordable rates.
                    </Text25w400>
                    <ButtonStyled
                        sx={{
                            width: "250px",
                            height: "60px",
                            marginTop: "20px",
                        }}
                    >
                        Book now
                    </ButtonStyled>
                </Grid>
            </Container>

            <Slider {...settings}>
                <Grid
                    sx={{
                        backgroundImage: "url(images/home/banner.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "500px",
                    }}
                />
                <Grid
                    sx={{
                        backgroundImage: "url(images/home/banner2.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "500px",
                    }}
                />
                <Grid
                    sx={{
                        backgroundImage: "url(images/home/banner3.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "100%",
                        height: "500px",
                    }}
                />
            </Slider>
        </Grid>
    );
}

export default Banner;
