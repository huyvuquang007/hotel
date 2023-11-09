import { Button, Grid, styled } from "@mui/material";

export const baseFont = {
    ebGaramond: "EB Garamond",
    montserrat: "Montserrat",
};

export const ButtonStyled = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 160px;
    height: 54px;
    flex-shrink: 0;
    background-color: #e0b973;
    border-radius: 10px;
    transition: 0.3s;

    color: #fff;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    &:hover {
        transform: scale(1.03);
    }
`;

export const Flex = styled(Grid)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FlexOverflow = styled(Grid)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::-webkit-scrollbar {
        visibility: hidden;
    }
`;

export const FlexReverse = styled(Grid)`
    display: flex;
    flex-direction: column;
`;

//////////////////////////////////  TEXT ////////////////////

export const Text14w400 = styled(Grid)`
    color: #fff;
    font-family: ${baseFont.montserrat};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text25w400 = styled(Grid)`
    color: #fff;
    font-family: ${baseFont.montserrat};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text25w400color = styled(Grid)`
    color: #14274a;
    font-family: ${baseFont.montserrat};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text30w400 = styled(Grid)`
    color: #14274a;
    font-family: ${baseFont.montserrat};
    font-size: 24px; // 30px
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text36w400 = styled(Grid)`
    color: #14274a;
    font-family: ${baseFont.montserrat};
    font-size: 30px; // 36
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text50w400 = styled(Grid)`
    color: #fff;
    font-family: ${baseFont.montserrat};
    font-size: 40px; // 50
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text50w400color = styled(Grid)`
    color: #14274a;
    font-family: ${baseFont.montserrat};
    font-size: 34px; // 50
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Text60w700white = styled(Grid)`
    color: #fff;

    font-family: ${baseFont.ebGaramond};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Text60w700 = styled(Grid)`
    color: #14274a;
    font-family: ${baseFont.ebGaramond};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Text154w700 = styled(Grid)`
    color: #fff;
    font-family: ${baseFont.ebGaramond};
    font-size: 94px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 10.78px;
`;

export const Hotline = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    /* width: 150px; */
    height: 40px;
    padding: 20px;
    background-color: black;
    color: white;
    font-weight: 500;
    cursor: pointer;
`;
