import styled from "styled-components";
import BannerBg from "./../../assets/banner-background.png";

export const BannerContainer = styled.section`
    background-image: url(${BannerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;
