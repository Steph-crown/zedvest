import styled from "styled-components";
import avatarBack from "./../../assets/avatar-back.png";

export const BannerContainer = styled.div`
    background: transparent;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    img.avatar-round {
        width: 100%;
        margin-top: -8em;
        margin-bottom: 2em;
        @media (max-width: 880px) {
            display: none;
        }
    }
    @media (max-width: 880px) {
        background-image: url(${avatarBack});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    div.banner {
        width: 100%;
        position: relative;
        @media (max-width: 880px) {
            position: relative;
        }
    }
    div.banner-flex {
        display: flex;
        justify-content: space-between;
        min-height: 2px;
        align-items: center;
        flex-wrap: nowrap;
        color: white;
        margin-top: -3em;
        position: absolute;
        z-index: 99393;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        @media (max-width: 880px) {
            position: relative;
        }

        div.center {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: auto;
            padding: 600px calc(0.08 * 100vw);
            max-width: 1500px;

            @media (max-width: 1900px) {
                padding: 500px calc(0.08 * 100vw);
                max-width: 1500px;
            }
            @media (max-width: 1700px) {
                padding: 400px calc(0.08 * 100vw);
                max-width: 1200px;
            }
            @media (max-width: 1600px) {
                padding: 400px calc(0.08 * 100vw);
                max-width: 1100px;
            }
            @media (max-width: 1400px) {
                padding: 300px calc(0.08 * 100vw);
                max-width: 900px;
            }
            @media (max-width: 1300px) {
                padding: 200px calc(0.08 * 100vw);
                max-width: 900px;
            }
            @media (max-width: 1200px) {
                padding: 100px calc(0.08 * 100vw);
                max-width: 850px;
            }
            @media (max-width: 1050px) {
                padding: 100px calc(0.08 * 100vw);
                max-width: 800px;
            }

            h1 {
                font-size: 4em;
                font-weight: 800;
                background-image: linear-gradient(
                    97.46deg,
                    #ffffff 4.79%,
                    #fff5d5 25.87%,
                    #ffeeb9 47.72%,
                    #ffc049 74.55%
                );
                background-clip: text;
                -webkit-background-clip: text;
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
                margin-top: 0.6em;
                font-size: 1.5em;
                margin-bottom: 1.5em;
                line-height: 50px;
                span {
                    color: var(--theme);
                }
                &.launch {
                    margin-bottom: 0.5em;
                    color: #eee;
                }
            }

            @media (max-width: 1050px) {
                /* padding: 50px calc(0.08 * 100vw);
                max-width: 700px; */
                h1 {
                    font-size: 2.8em;
                }
                p {
                    font-size: 1.2em;
                    line-height: 40px;
                }
            }
            @media (max-width: 940px) {
                padding: 50px calc(0.08 * 100vw);
                max-width: 700px;
            }
            @media (max-width: 880px) {
                padding: 0px calc(0.08 * 100vw);
                max-width: 100%;
                position: relative;
                h1 {
                    font-size: 2em;
                }
                p {
                    font-size: 1em;
                    line-height: 30px;
                    margin-top: 1em;
                }
            }
        }

        div.right {
            width: 58%;
            margin-right: -4em;

            img {
                width: 100%;
                /* height: 300px; */
                object-fit: cover;
            }
        }
    }

    @media (max-width: 1300px) {
        div.banner-flex {
            margin-top: -1.6em;
        }
    }

    @media (max-width: 1200px) {
        div.banner-flex {
            margin-top: -1em;
            div.right {
                margin-right: -2em;
            }
        }
    }

    @media (max-width: 1050px) {
        div.banner-flex {
            margin-top: 1.6em;
            flex-direction: column;
            padding-bottom: 1.5em;
            div.left {
                width: 100%;
            }

            div.right {
                width: 100%;
                margin-right: 0em;
                margin-left: -9em;

                img {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 900px) {
        div.banner-flex {
            div.right {
                margin-left: -7em;
            }
        }
    }

    @media (max-width: 880px) {
        div.banner-flex {
            div.right {
                margin-left: -5em;
            }
        }
    }

    @media (max-width: 500px) {
        div.banner-flex {
            div.left {
                h1 {
                    font-size: 2.5em;
                }
            }
            div.right {
                margin-left: -2em;
            }
        }
    }
`;
