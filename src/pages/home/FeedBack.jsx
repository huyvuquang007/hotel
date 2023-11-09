import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {
    ButtonStyled,
    Flex,
    FlexOverflow,
    FlexReverse,
    Text25w400,
    Text25w400color,
    Text30w400,
    Text36w400,
    Text60w700,
} from "../../style/style";

function FeedBack() {
    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -=
                containerRef.current.clientWidth + 10;
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft +=
                containerRef.current.clientWidth + 10;
        }
    };
    return (
        <Grid>
            <Container>
                <Text60w700 sx={{ textAlign: "center", margin: "40px 0 20px" }}>
                    FeedBack
                </Text60w700>
                <FlexReverse
                    style={{
                        background: "#e0b973",
                        padding: "20px",
                        borderRadius: "10px",
                        width: "500px",
                        margin: "0 auto",
                    }}
                >
                    <FlexOverflow
                        ref={containerRef}
                        style={{
                            width: "100%",
                            overflow: "auto",
                            scrollBehavior: "smooth",
                            gap: "10px",
                        }}
                    >
                        <FlexReverse style={{ width: "100%", flexShrink: "0" }}>
                            <Text30w400 sx={{ textAlign: "center" }}>
                                "Calm, Serene, Retro – What a way to relax and
                                enjoy"
                            </Text30w400>
                            <Text25w400color
                                sx={{ textAlign: "center", marginTop: "15px" }}
                            >
                                {" "}
                                Mr. and Mrs. Baxter, UK
                            </Text25w400color>
                        </FlexReverse>
                        <FlexReverse style={{ width: "100%", flexShrink: "0" }}>
                            <Text30w400 sx={{ textAlign: "center" }}>
                                Phòng đẹp, tôi rất thích
                            </Text30w400>
                            <Text25w400color
                                sx={{ textAlign: "center", marginTop: "15px" }}
                            >
                                {" "}
                                Mr.Taylor
                            </Text25w400color>
                        </FlexReverse>
                    </FlexOverflow>

                    <Flex
                        style={{ justifyContent: "center", marginTop: "20px" }}
                    >
                        <ArrowCircleLeftIcon
                            onClick={handleScrollLeft}
                            sx={{ fontSize: "40px", color: "#ddd" }}
                        />
                        <ArrowCircleRightIcon
                            onClick={handleScrollRight}
                            sx={{ fontSize: "40px", color: "#ddd" }}
                        />
                    </Flex>
                </FlexReverse>
            </Container>
        </Grid>
    );
}

export default FeedBack;
