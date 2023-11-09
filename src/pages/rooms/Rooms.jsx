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
import { Link, useParams } from "react-router-dom";

const datas = [
    {
        id: 1,
        name: "Phòng View Núi",
        img: "https://onevivu.vn/wp-content/uploads/2021/08/Rock-Garden-Homestay-Sapa-san-may-2.jpg",
    },
    {
        id: 2,
        name: "Phòng View Biển",
        img: "https://quynhontourist.vn/wp-content/uploads/2020/02/089A5634-HDR-1.jpg",
    },
    {
        id: 3,
        name: "Phòng View Thành Phố",
        img: "https://www.vietfuntravel.com.vn/image/data/Hinh-Sai-Gon/900.top-khach-san-co-view-dep-xuat-sac-o-sai-gon/Top-khach-san-co-view-dep-o-sai-gon-phan-theo-tung-quan-h1.png",
    },
    {
        id: 4,
        name: "PentHouse",
        img: "https://decoxdesign.com/upload/images/can-ho-penthouse-01-decox-design.jpg",
    },
    {
        id: 5,
        name: "Phòng Đôi",
        img: "https://chumy.vn/wp-content/uploads/2019/12/giuong-khach-san-double-size.jpg",
    },
];

function Rooms() {
    return (
        <Grid>
            <Container>
                <Grid sx={{ marginTop: "100px" }}>
                    <Text60w700 sx={{ textAlign: "center" }}>
                        Bảng Giá Phòng
                    </Text60w700>
                    <Text25w400color
                        sx={{ textAlign: "center", margin: "30px 0" }}
                    >
                        Mỗi phòng sáng sủa, tràn ngập ánh sáng của chúng tôi đều
                        có mọi thứ bạn có thể cần để có một kỳ nghỉ thoải mái.
                        Và vâng, sự thoải mái không phải là mục tiêu duy nhất
                        của chúng tôi, chúng tôi cũng đánh giá cao thiết kế tốt,
                        nội thất hiện đại kiểu dáng đẹp được bổ sung bởi tông
                        màu phong phú của thiên nhiên có thể nhìn thấy từ cửa sổ
                        và sân hiên nhìn ra biển trong phòng của chúng tôi.
                    </Text25w400color>
                    {datas.map((item) => (
                        <Grid
                            key={Math.random()}
                            sx={{
                                width: "70%",
                                margin: "40px auto 90px",
                                borderRadius: "10px",
                                overflow: "hidden",
                                border: "1px solid #14274A",
                            }}
                        >
                            <Image
                                url={item.img}
                                style={{
                                    width: "100%",
                                    height: "400px",
                                }}
                            />
                            <Grid
                                sx={{
                                    width: "100%",
                                    padding: "10px 0",
                                    background: "#14274A",
                                }}
                            >
                                <Text60w700white sx={{ textAlign: "center" }}>
                                    {item.name}
                                </Text60w700white>
                            </Grid>
                            <Flex sx={{ width: "100%", padding: "20px" }}>
                                <Text25w400color>Xem Phòng</Text25w400color>
                                <Link to={`/rooms/${item.id}`}>
                                    <ButtonStyled>Đặt Ngay</ButtonStyled>
                                </Link>
                            </Flex>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
}

export default Rooms;
