import styled from "styled-components";
import BannerBg from "./../../assets/banner-background.png";

export const BannerContainer = styled.section`
    background-image: url(${BannerBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    div.banner-flex {
        display: flex;
        justify-content: space-between;
        min-height: 2px;
        align-items: center;
        flex-wrap: wrap;
        color: white;
        margin-top: -3em;

        div.left {
            width: 50%;

            h1 {
                font-size: 3.6em;
                font-weight: 800;
                background-image: linear-gradient(
                    97.46deg,
                    #ffffff 4.79%,
                    #fff5d5 25.87%,
                    #ffeeb9 47.72%,
                    #ffc049 74.55%
                );
                background-clip: text;
                color: transparent;
                /* line-height: 90px; */
            }

            h6 {
                font-size: 1.2em;
                display: flex;
                align-items: center;
                min-height: 2px;
                margin-bottom: 0.5em;

                svg {
                    height: 4px;
                    margin-right: 5px;
                }
            }

            p {
                margin-top: 1.5em;
                font-size: 1em;
                margin-bottom: 2em;
            }
        }

        div.right {
            width: 50%;
            margin-right: -4em;

            img {
                width: 100%;
                /* height: 300px; */
                object-fit: cover;
            }
        }
    }
`;
