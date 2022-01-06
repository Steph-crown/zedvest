import styled from "styled-components";

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
    }
    div.banner {
        width: 100%;
        position: relative;
        padding: 0 calc(0.08 * 100vw);
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

        div.center {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            max-width: 700px;
            margin: auto;
            padding: 200px 0;

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

                &.launch {
                    margin-bottom: 0.5em;
                    color: #eee;
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
        div.banner-<InputGroup / > flex {
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

    @media (max-width: 800px) {
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
