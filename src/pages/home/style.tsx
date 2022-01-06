import styled from "styled-components";
import BgPattern from "./../../assets/background-vector-min.png";

export const HomePageContainer = styled.div`
    background: linear-gradient(rgba(30, 35, 41, 0.6), rgba(30, 35, 41, 0.6)),
        url(${BgPattern});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;
