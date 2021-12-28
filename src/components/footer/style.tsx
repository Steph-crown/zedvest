import styled from "styled-components";
import Shadow from "./../../assets/bg-shadow.png";

export const FooterContainer = styled.footer`
    /* padding: 4em 0; */
    position: relative;
    /* background: black; */
    /* background: rgb(255, 210, 70); */
    background-size: cover;
    section.pre-footer {
        position: relative;
        width: 100%;
        min-height: 2px;
        background-image: url(${Shadow});
        background-size: cover;
        width: 100%;
        min-height: 2px;
        background-repeat: no-repeat;
        background-position: center;
        color: white;
        text-align: center;
        padding-top: 4em;
        padding-bottom: 17em;

        h2 {
            font-size: 2.5em;
        }
        h6 {
            font-size: 1.5em;
            color: #a9a7a7;
            font-weight: 500;
            margin-top: 4px;
        }
        h4 {
            margin-top: 3em;
            font-size: 1.5em;
            margin-bottom: 1em;
        }

        div.input-group {
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }

    position: relative;

    img {
        position: absolute;
        z-index: 383838;

        &.mem {
            height: 160px;
        }
        &.m1 {
            top: 32px;
            left: 15px;
        }

        &.m2 {
            top: 8px;
            right: 12px;
        }

        &.m3 {
            left: 8px;
            bottom: -42px;
        }

        &.c {
            height: 56px;
        }

        &.com1 {
            top: 222px;
            left: 88px;
        }
        &.com4 {
            top: 204px;
            right: 48px;
        }
        &.com2 {
            bottom: 76px;
            left: 296px;
        }
        &.com3 {
            bottom: 135px;
            right: 58px;
        }
    }

    div.empty {
        width: 100%;
        height: 56px;
        background: #21252b;
    }

    @media (max-width: 1200px) {
        img {
            &.mem {
                height: 140px;
            }
            &.c {
                height: 48px;
            }

            &.m1 {
                top: 80px;
                left: 15px;
            }

            &.m2 {
                top: -40px;
                right: 12px;
            }

            &.m3 {
                left: 8px;
                bottom: -42px;
            }

            &.com1 {
                top: 242px;
                left: 88px;
            }
            &.com4 {
                top: 254px;
    right: 28px;
}
            }
            &.com2 {
                bottom: 76px;
                left: 206px;
            }
            &.com3 {
                bottom: 135px;
                right: 58px;
            }
        }
    }

    @media (max-width: 760px) {
        img {
            &.mem {
                height: 140px;
            }
            &.c {
                height: 48px;
            }

            &.m1 {
                top: 80px;
                left: 15px;
            }

            &.m2 {
                top: -40px;
                right: 12px;
            }

            &.m3 {
                left: 8px;
                bottom: -32px;
            }

            &.com1 {
                top: 232px;
    left: 48px;
}
            }
            &.com4 {
                top: 244px;
                right: 48px;
            }
            &.com2 {
                bottom: 206px;
                left: 86px;
            }
            &.com3 {
                bottom: 135px;
                right: 58px;
            }
        }
    }
    @media (max-width: 630px) {
        section {
            h2 {
                font-size: 1.8em !important;
                line-height: 44px;
                position: relative;
                z-index: 8444848484;
            }

            h6 {
                font-size: 1.2em !important;
            }
        }
        img {
            &.mem {
                height: 100px;
            }
            &.c {
                height: 32px;
            }

            &.m1 {
                top: 0px;
                left: 15px;
            }

            &.m2 {
                top: -40px;
                right: 12px;
            }

            &.m3 {
                left: 8px;
                bottom: -24px;
            }

            &.com1 {
                top: 232px;
                left: 28px;
            }
            &.com4 {
                top: 204px;
                right: 48px;
            }
            &.com2 {
                bottom: 126px;
                left: 46px;
            }
            &.com3 {
                bottom: 200px;
                right: 40px;
            }
        }
    }

    @media (max-width: 440px) {
        section {
            h2 {
                font-size: 1.8em !important;
                line-height: 44px;
                position: relative;
                z-index: 8444848484;
            }

            h6 {
                font-size: 1.2em !important;
            }
        }
        img {
            &.mem {
                height: 100px;
            }
            &.c {
                height: 32px;
            }

            &.m1 {
                top: -15px;
                left: 15px;
            }

            &.m2 {
                top: -40px;
                right: 12px;
            }

            &.m3 {
                left: 8px;
                bottom: -24px;
            }

            &.com1 {
                top: 232px;
                left: 28px;
            }
            &.com4 {
                top: 204px;
                right: 48px;
            }
            &.com2 {
                bottom: 126px;
                left: 46px;
            }
            &.com3 {
                bottom: 200px;
                right: 40px;
            }
        }
    }

    @media (max-width: 370px) {
        section {
            h2 {
                font-size: 1.8em !important;
                line-height: 44px;
                position: relative;
                z-index: 8444848484;
            }

            h6 {
                font-size: 1.2em !important;
            }
        }
        img {
            &.mem {
                height: 100px;
            }
            &.c {
                height: 32px;
            }

            &.m1 {
                top: -15px;
                left: 15px;
            }

            &.m2 {
                top: -40px;
                right: 12px;
            }

            &.m3 {
                left: 8px;
                bottom: -24px;
            }

            &.com1 {
                top: 252px;
                left: 28px;
            }
            &.com4 {
                top: 284px;
                right: 28px;
            }
            &.com2 {
                bottom: 126px;
                left: 46px;
            }
            &.com3 {
                bottom: 200px;
                right: 40px;
            }
        }
    }

    @media (max-width: 330px) {
        section {
            h2 {
                font-size: 1.8em !important;
                line-height: 44px;
                position: relative;
                z-index: 8444848484;
            }

            h6 {
                font-size: 1.2em !important;
            }
        }
        img {
            &.mem {
                height: 100px;
            }
            &.c {
                height: 32px;
            }

            &.m1 {
                top: -15px;
                left: 15px;
            }

            &.m2 {
                top: -40px;
                right: 12px;
            }

            &.m3 {
                left: 8px;
                bottom: -24px;
            }

            &.com1 {
                top: 272px;
                left: 28px;
            }
            &.com4 {
                top: 254px;
                right: 28px;
            }
            &.com2 {
                bottom: 126px;
                left: 46px;
            }
            &.com3 {
                bottom: 200px;
                right: 40px;
            }
        }
    }
`;
