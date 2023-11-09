import React, { useRef, useState, useEffect } from "react";
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
import Image from "../../components/Image";

const data = [
    {
        title: "Phòng GYM",
        images: [
            {
                image: "https://levelfyc.com/wp-content/uploads/2021/09/lou-3803.jpg",
            },
            {
                image: "https://hdfitness.vn/wp-content/uploads/2022/02/A-50-scaled.jpg",
            },
        ],
    },
    {
        title: "Quầy Bar Trên Cao",
        images: [
            {
                image: "https://i.ex-cdn.com/vntravellive.com/files/f1/uploaded/images/photo_news/800x800/news_20180116025832/CeLaVi.jpg.jpg",
            },
            {
                image: "https://www.hoteldesartssaigon.com/wp-content/uploads/sites/92/2019/11/0919-AJS-NOI-Hotel-des-Arts-SGN-DJI_0215-Web.jpg",
            },
        ],
    },
    {
        title: "Dịch vụ Spa",
        images: [
            {
                image: "https://binbadecor.vn/wp-content/uploads/2020/02/hay-thiet-spa-cao-cap-theo-cach-rieng-cua-ban-2.jpg",
            },
            {
                image: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/17030850/image-8-spa-lam-dep-cao-cap-nhat-tai-thanh-pho-ho-chi-minh-164743613070354.jpg",
            },
        ],
    },
    {
        title: "Hồ Bơi Trên Cao",
        images: [
            {
                image: "https://danviet.mediacdn.vn/296231569849192448/2021/6/10/addressbeachresortheroimage-1623314356967-1623314357153589395065.jpeg",
            },
            {
                image: "https://cafefcdn.com/2017/photo-8-1507626352097.jpg",
            },
        ],
    },
    {
        title: "Nhà Hàng",
        images: [
            {
                image: "https://acihome.vn/uploads/15/mau-thiet-ke-nha-hang-an-sang-trong-tai-khach-san-4-5-sao-1.JPG",
            },
            {
                image: "https://cdn.tgdd.vn/Files/2020/10/24/1301501/cung-nguoi-yeu-den-12-nha-hang-sang-trong-quan-1-nay-cho-tinh-cam-them-dong-day-202010260811511121.jpg",
            },
        ],
    },
    {
        title: "Dịch vụ giặt là",
        images: [
            {
                image: "https://www.hoteljob.vn/uploads/images/18-07-06-15/ban-mo-ta-cong-viec-nhan-vien-giat-la-khach-san.jpg",
            },
            {
                image: "https://deltech.vn/upload/images/laundry-la-gi%20(1).jpg",
            },
        ],
    },
];

function Facilities() {
    // const ref =useRef(null)
    const [isFirstSlide, setIsFirstSlide] = useState(false);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const [refs, setRefs] = useState([
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]);

    const handleScrollLeft = (index) => {
        if (refs[index].current) {
            refs[index].current.scrollLeft -=
                refs[index].current.clientWidth + 10;
        }
    };

    const handleScrollRight = (index) => {
        if (refs[index].current) {
            refs[index].current.scrollLeft +=
                refs[index].current.clientWidth + 10;
        }
    };

    return (
        <Grid>
            <Container>
                <Grid sx={{ marginTop: "100px" }}>
                    <Text60w700 sx={{ textAlign: "center" }}>
                        Dịch Vụ Của Chúng Tôi
                    </Text60w700>
                    <Text25w400color
                        sx={{ textAlign: "center", margin: "30px 0" }}
                    >
                        Chúng tôi muốn kỳ nghỉ của bạn tại khách sạn sang trọng
                        của chúng tôi thực sự khó quên. Đó là lý do tại sao
                        chúng tôi đặc biệt quan tâm đến mọi nhu cầu của bạn.
                        rằng chúng tôi có thể đảm bảo một trải nghiệm khá độc
                        đáo. Khách sạn sang trọng mang đến khung cảnh hoàn hảo
                        với cảnh quan tuyệt đẹp để thư giãn và các tiện ích nghỉ
                        dưỡng sang trọng hiện đại của chúng tôi sẽ giúp bạn tận
                        hưởng những điều tuyệt vời nhất.
                    </Text25w400color>

                    {data.map((item, index) => (
                        <Grid key={Math.random()} sx={{ marginBottom: "70px" }}>
                            <Text50w400color
                                sx={{
                                    textAlign: "center",
                                    marginBottom: "30px",
                                }}
                            >
                                {item.title}
                            </Text50w400color>

                            <Grid
                                sx={{
                                    width: "70%",
                                    margin: "0 auto",
                                    position: "relative",
                                }}
                            >
                                <FlexOverflow
                                    ref={refs[index]}
                                    sx={{
                                        width: "100%",
                                        overflow: "auto",
                                        scrollBehavior: "smooth",
                                        gap: "10px",
                                    }}
                                >
                                    <ArrowCircleLeftIcon
                                        onClick={() => handleScrollLeft(index)}
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
                                        onClick={() => handleScrollRight(index)}
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "-80px",
                                            fontSize: "40px",
                                            color: "#E0B973",
                                            cursor: "pointer",
                                        }}
                                    />
                                    {item.images.map((subItem) => (
                                        <Image
                                            key={Math.random()}
                                            url={subItem.image}
                                            style={{
                                                width: "100%",
                                                height: "400px",
                                            }}
                                        />
                                    ))}
                                </FlexOverflow>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Grid>
    );
}

export default Facilities;
