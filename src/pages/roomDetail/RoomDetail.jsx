import React, { useRef, useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { formatCurrency } from "../../components/formatCurrency";
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
import Image from "../../components/Image";
import Calendar from "../../components/Calendar";

const roomDetails = {
    title: "Phòng View Núi",
    price: 450000,
    desc: "Vị trí Căn hộ dịch vụ Homestay Hà Nội mất 7-10 phút tới Sân vận động Mỹ Đình, tòa nhà Keang Nam, trung tâm Hội nghị. Tòa nhà này có khu vực hồ 10,6 ha. Khu vực có hơn 100 tiện nghi. Như bể bơi ngoài trời, phòng tập thể dục, nhiều khu vui chơi, BBQ ngoài trời, an ninh 24/7, khu vực đỗ xe đặc biệt, cà phê piano, Vinmart+, K Market, cửa hàng dược phẩm….. Tòa nhà này được bảo vệ bởi an ninh 4 tầng, là một nơi rất an toàn. Vinhomes Smart City cũng có trung tâm Vincom và một công viên vườn Nhật lớn. Căn hộ rất gần Aeon Mall. Căn hộ có tầm nhìn thoáng, đẹp.",
    images: [
        {
            img: "https://naocungdi.com/wp-content/uploads/2019/06/phong-view-nui-tai-valley-view-homestay-768x495.jpg",
        },
        {
            img: "https://naturabungalow.com/pic/news/khach-san-co-be-boi-vo-cuc-dep-nhat-pu-luong-natur_4985.jpg",
        },
        {
            img: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/30163518/image-nhung-khach-san-view-nui-sapa-sang-xin-va-dang-cap-bac-nhat-165128611848414.jpg",
        },
    ],
};

function RoomDetail() {
    const ref = useRef(null);

    const handleScrollLeft = () => {
        if (ref.current) {
            ref.current.scrollLeft -= ref.current.clientWidth + 10;
        }
    };

    const handleScrollRight = () => {
        if (ref.current) {
            ref.current.scrollLeft += ref.current.clientWidth + 10;
        }
    };
    return (
        <Grid sx={{ marginTop: "130px" }}>
            <Container>
                {/* Title */}
                <Text50w400color
                    sx={{
                        textAlign: "center",
                        marginBottom: "30px",
                    }}
                >
                    {roomDetails.title}
                </Text50w400color>

                {/* Image */}
                <Grid
                    sx={{
                        width: "70%",
                        margin: "0 auto",
                        position: "relative",
                    }}
                >
                    <FlexOverflow
                        ref={ref}
                        sx={{
                            width: "100%",
                            overflow: "auto",
                            scrollBehavior: "smooth",
                            gap: "10px",
                        }}
                    >
                        <ArrowCircleLeftIcon
                            onClick={handleScrollLeft}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "-80px",
                                fontSize: "40px",
                                color: "#E0B973",
                                cursor: "pointer",
                            }}
                        />
                        <ArrowCircleRightIcon
                            onClick={handleScrollRight}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: "-80px",
                                fontSize: "40px",
                                color: "#E0B973",
                                cursor: "pointer",
                            }}
                        />
                        {roomDetails.images.map((item) => (
                            <Image
                                key={Math.random()}
                                url={item.img}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                }}
                            />
                        ))}
                    </FlexOverflow>
                </Grid>

                {/* Desc */}
                <Grid
                    container
                    spacing={3}
                    sx={{ marginTop: "40px", alignItems: "center" }}
                >
                    <Grid item xs={6}>
                        <FlexReverse>
                            <Text30w400>Thông tin phòng</Text30w400>
                            <Text25w400color sx={{ marginTop: "30px" }}>
                                {roomDetails.desc}
                            </Text25w400color>
                        </FlexReverse>
                    </Grid>

                    <Grid item xs={6}>
                        <Grid
                            sx={{
                                width: "fit-content",
                                background: "#E0B973",
                                padding: "20px",
                                borderRadius: "16px",
                            }}
                        >
                            <Text30w400
                                sx={{ color: "white", marginBottom: "20px" }}
                            >
                                Giá Tiền: {formatCurrency(roomDetails.price)}
                                /đêm
                            </Text30w400>
                            <Calendar price={roomDetails.price} />
                            <ButtonStyled
                                sx={{
                                    background: "#FBAB7E",
                                    margin: "30px auto 0",
                                }}
                            >
                                Đặt Phòng
                            </ButtonStyled>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
}

export default RoomDetail;
