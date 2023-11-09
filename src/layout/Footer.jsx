import { Container, Grid } from "@mui/material";
import React, { useRef } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
    ButtonStyled,
    Flex,
    FlexOverflow,
    FlexReverse,
    Text25w400,
    Text25w400color,
    Text30w400,
    Text36w400,
    Text50w400,
    Text60w700,
} from "../style/style";
import { Text14w400 } from "../style/style";

function Footer() {
    return (
        <Grid
            sx={{ padding: "60px 0", marginTop: "30px", background: "#14274A" }}
        >
            <Container>
                <Flex>
                    <FlexReverse sx={{ gap: "20px" }}>
                        <Text50w400>LUXURY HOTEL</Text50w400>
                        <Text14w400 sx={{ width: "200px" }}>
                            497 Evergreen Rd. Roseville, CA 95673 +44 345 678
                            903 luxury_hotels@gmail.com
                        </Text14w400>
                    </FlexReverse>
                    <FlexReverse sx={{ gap: "20px" }}>
                        <Text25w400>Về Chúng Tôi</Text25w400>
                        <Text25w400>Liên Hệ</Text25w400>
                        <Text25w400>Điều khoản và điều kiện</Text25w400>
                    </FlexReverse>
                    <FlexReverse sx={{ gap: "20px" }}>
                        <Flex
                            sx={{ justifyContent: "flex-start", gap: "10px" }}
                        >
                            <FacebookIcon
                                sx={{ fontSize: "40px", color: "#fff" }}
                            />
                            <Text25w400>Facebook</Text25w400>
                        </Flex>
                        <Flex
                            sx={{ justifyContent: "flex-start", gap: "10px" }}
                        >
                            <InstagramIcon
                                sx={{ fontSize: "40px", color: "#fff" }}
                            />
                            <Text25w400>Instagram</Text25w400>
                        </Flex>
                        <Flex
                            sx={{ justifyContent: "flex-start", gap: "10px" }}
                        >
                            <TwitterIcon
                                sx={{ fontSize: "40px", color: "#fff" }}
                            />
                            <Text25w400>Twitter</Text25w400>
                        </Flex>
                    </FlexReverse>
                    <FlexReverse sx={{ gap: "20px" }}>
                        <Text25w400>Gửi Mail cho chúng tôi</Text25w400>
                        <Flex
                            sx={{
                                width: "350px",
                                background: "transparent",
                                border: "1px solid #E0B973",
                                borderRadius: "10px",
                                height: "50px",
                                paddingLeft: "10px",
                                overflow: "hidden",
                            }}
                        >
                            <Grid style={{ flex: "1", height: "100%" }}>
                                <input
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: "none",
                                        outline: "none",
                                        color: "white",
                                        background: "transparent",
                                    }}
                                    type="text"
                                    placeholder="Enter Email"
                                />
                            </Grid>
                            <ButtonStyled
                                sx={{ width: "100px", height: "100%" }}
                            >
                                OK
                            </ButtonStyled>
                        </Flex>
                    </FlexReverse>
                </Flex>
            </Container>
        </Grid>
    );
}

export default Footer;
