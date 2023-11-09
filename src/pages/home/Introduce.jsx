import { Container, Grid } from "@mui/material";
import React from "react";
import {
    ButtonStyled,
    Flex,
    FlexReverse,
    Text25w400,
    Text25w400color,
    Text36w400,
    Text60w700,
} from "../../style/style";
import Image from "../../components/Image";

function Introduce() {
    return (
        <Grid>
            <Container>
                <Text36w400 sx={{ textAlign: "center", margin: "40px 0" }}>
                    Tất cả các loại phòng của chúng tôi đều bao gồm bữa sáng
                    miễn phí
                </Text36w400>
                <Flex sx={{}}>
                    <FlexReverse
                        sx={{
                            gap: "25px",
                            paddingLeft: "20px",
                            borderLeft: "1px solid #14274A",
                            width: "500px",
                        }}
                    >
                        <Text60w700>Phòng Sang trọng</Text60w700>
                        <Text25w400color>
                            Sự sang trọng được định nghĩa lại Phòng của chúng
                            tôi được thiết kế để bạn vào một môi trường được tạo
                            ra để giải trí. Hãy quên đi công việc hàng ngày ở
                            nhà cuộc sống và tìm cho mình một thiên đường riêng.
                        </Text25w400color>
                        <ButtonStyled style={{ width: "150px" }}>
                            Khám Phá
                        </ButtonStyled>
                    </FlexReverse>
                    <Image
                        url="https://imagescdn.pystravel.vn/uploads/posts/albums/5204/db5a5edc2401a0000dbaffb2133bcc7c.jpg"
                        style={{
                            width: "530px",
                            height: "360px",
                            borderRadius: "16px",
                        }}
                    />
                </Flex>
                <Flex sx={{ marginTop: "40px" }}>
                    <FlexReverse
                        sx={{
                            gap: "25px",
                            paddingLeft: "20px",
                            borderLeft: "1px solid #14274A",
                            width: "500px",
                        }}
                    >
                        <Text60w700>Bỏ âu lo của bạn lại phía sau</Text60w700>
                        <Text25w400color>
                            Chúng tôi yêu cuộc sống ở bãi biển. Gần ra đại dương
                            với khả năng tiếp cận bãi cát vô tận bãi biển đảm
                            bảo một trạng thái thoải mái của tâm trí. Nó dường
                            như thời gian vẫn đứng yên nhìn đại dương.
                        </Text25w400color>
                        <ButtonStyled style={{ width: "150px" }}>
                            Khám Phá
                        </ButtonStyled>
                    </FlexReverse>
                    <Image
                        url="https://imagescdn.pystravel.vn/uploads/posts/albums/5204/db5a5edc2401a0000dbaffb2133bcc7c.jpg"
                        style={{
                            width: "530px",
                            height: "360px",
                            borderRadius: "16px",
                        }}
                    />
                </Flex>
            </Container>
        </Grid>
    );
}

export default Introduce;
