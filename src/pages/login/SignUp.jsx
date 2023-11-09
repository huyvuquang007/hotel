import React from "react";
import Layout from "../../layout/Layout";
import { Box, Container, Grid } from "@mui/material";
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
    Text60w700white,
} from "../../style/style";
import Image from "../../components/Image";

function SignUp() {
    return (
        <Grid
            sx={{
                background: "#E0B973",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <Grid
                sx={{
                    width: "500px",
                    padding: "25px",
                    borderRadius: "16px",
                    background: "white",
                }}
            >
                <Text30w400 sx={{ textAlign: "center" }}>
                    Đăng Ký Tài Khoản
                </Text30w400>

                <Text25w400color sx={{marginTop: "30px",}}>Username</Text25w400color>
                <Grid
                    sx={{
                        width: "100%",
                        height: "48px",
                        overflow: "hidden",
                        borderRadius: "16px",
                        background: "#E0B973",
                        padding: "0 20px",
                        
                    }}
                >
                    <input
                        style={{
                            width: "100%",
                            height: "100%",
                            color: "white",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            fontSize: "20px",
                        }}
                        type="text"
                    />
                </Grid>

                <Text25w400color sx={{marginTop: "30px"}}>Password</Text25w400color>
                <Grid
                    sx={{
                        width: "100%",
                        height: "48px",
                        overflow: "hidden",
                        borderRadius: "16px",
                        background: "#E0B973",
                        padding: "0 20px",
                    }}
                >
                    <input
                        style={{
                            width: "100%",
                            height: "100%",
                            color: "white",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            fontSize: "20px",
                        }}
                        type="password"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignUp;
