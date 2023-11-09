import React, { useRef, useState, useEffect } from "react";
import Layout from "../../layout/Layout";
import { Container, Grid } from "@mui/material";
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
    Text50w400color,
    Text60w700,
} from "../../style/style";

function Contact() {
    return (
        <Grid>
            <Flex
                sx={{
                    width: "100%",
                    height: "200px",
                    background: "#14274A",
                    justifyContent: "center",
                }}
            >
                <Text60w700 sx={{ color: "white" }}>
                    Liên hệ với chúng tôi
                </Text60w700>
            </Flex>
            <Container>
                <Text60w700 sx={{ margin: "90px 0 20px", textAlign: "center" }}>
                    CHÚNG TÔI Ở ĐÂY VÌ BẠN
                </Text60w700>
                <Text30w400 sx={{ textAlign: "center" }}>
                    Tại Luxury Hotels, chúng tôi coi trọng khách hàng của mình.
                    Bạn có bất kỳ thắc mắc, khiếu nại hoặc yêu cầu nào, vui lòng
                    chuyển nó đến bộ phận hỗ trợ của chúng tôi và chúng tôi sẽ
                    liên hệ lại với bạn sớm nhất có thể.
                </Text30w400>

                <Flex sx={{ marginTop: "60px" }}>
                    <Grid>
                        <Text36w400>
                            497 Evergreen Rd. Roseville, CA 95673
                        </Text36w400>
                        <Text60w700 sx={{ margin: "20px 0" }}>
                            View Map ---
                        </Text60w700>
                        <Text36w400>Phone: +44 345 678 903 Email:</Text36w400>
                        <Text36w400>luxury_hotels@gmail.com</Text36w400>
                    </Grid>
                    <Grid>
                        <Text25w400color sx={{}}>Name</Text25w400color>
                        <Grid
                            sx={{
                                width: "300px",
                                height: "40px",
                                borderRadius: "10px",
                                padding: "0 15px",
                                border: "1px solid #14274A",
                                marginBottom: "20px",
                            }}
                        >
                            <input
                                style={{
                                    width: "100%",
                                    height: "40px",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    background: "transparent",
                                }}
                                type="text"
                            />
                        </Grid>

                        <Text25w400color sx={{}}>Email Address</Text25w400color>
                        <Grid
                            sx={{
                                width: "300px",
                                height: "40px",
                                borderRadius: "10px",
                                padding: "0 15px",
                                border: "1px solid #14274A",
                                marginBottom: "20px",
                            }}
                        >
                            <input
                                style={{
                                    width: "100%",
                                    height: "40px",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    background: "transparent",
                                }}
                                type="text"
                            />
                        </Grid>

                        <Text25w400color sx={{}}>Message</Text25w400color>
                        <Grid
                            sx={{
                                width: "300px",
                                height: "80px",
                                borderRadius: "10px",
                                padding: "0 15px",
                                border: "1px solid #14274A",
                                marginBottom: "20px",
                            }}
                        >
                            <input
                                style={{
                                    width: "100%",
                                    height: "40px",
                                    border: "none",
                                    outline: "none",
                                    color: "white",
                                    background: "transparent",
                                }}
                                type="text"
                            />
                        </Grid>
                        <ButtonStyled>Submit</ButtonStyled>
                    </Grid>
                </Flex>
            </Container>
        </Grid>
    );
}

export default Contact;
