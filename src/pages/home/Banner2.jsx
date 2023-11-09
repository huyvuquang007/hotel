import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { Container, Grid } from "@mui/material";
import {
    ButtonStyled,
    Text154w700,
    Text25w400,
    Text50w400,
    Text60w700white,
} from "../../style/style";

const bogliasco = "/images/home/banner.png";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
    return (
        <HeroSlider
            height={"80vh"}
            autoplay
            controller={{
                initialSlide: 1,
                autoplayDuration: 300,
                slidingDuration: 200,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide),
            }}
        >
            <Overlay>
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
                            Book your stay and enjoy Luxury redefined at the
                            most affordable rates.
                        </Text25w400>
                    </Grid>
                </Container>
            </Overlay>

            <Slide
                label="View Núi"
                background={{
                    backgroundImageSrc: giauPass,
                }}
            />

            <Slide
                label="Toàn Cảnh"
                background={{
                    backgroundImageSrc: bogliasco,
                }}
            />

            <Slide
                label="View Biển"
                background={{
                    backgroundImageSrc: countyClare,
                }}
            />

            <Slide
                label="View Đồi"
                background={{
                    backgroundImageSrc: craterRock,
                }}
            />

            <MenuNav />
        </HeroSlider>
    );
}
