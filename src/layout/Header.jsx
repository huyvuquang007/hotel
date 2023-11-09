import { Container, Grid, Typography, colors } from "@mui/material";
import React from "react";
import Image from "../components/Image";
import { ButtonStyled, Flex, Hotline, Text25w400 } from "../style/style";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <Container>
            <Grid
                sx={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    zIndex: "10000000",
                }}
            >
                <Container>
                    <Flex sx={{ width: "100%" }}>
                        <Image
                            url="/images/home/logo.png"
                            style={{ width: "130px", height: "75px" }}
                        />

                        <Flex
                            sx={{
                                width: "400px",
                                padding: "10px",
                                borderRadius: "16px",
                                background: "#E0B973",
                            }}
                        >
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                to="/"
                            >
                                <Text25w400>Trang chủ</Text25w400>
                            </NavLink>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                to="/facilities"
                            >
                                <Text25w400>Dịch vụ</Text25w400>
                            </NavLink>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                to="/rooms"
                            >
                                <Text25w400>Phòng</Text25w400>
                            </NavLink>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                                to="/contact"
                            >
                                <Text25w400>Liên Hệ</Text25w400>
                            </NavLink>
                        </Flex>
                    </Flex>
                </Container>
            </Grid>
        </Container>
    );
}

export default Header;
