import styled from "styled-components";

export const FeatureContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    background-color: transparent;
    border-bottom: 1px solid #fca400;
    border-top: 1px solid #fca400;
    padding-top: 100px;
    padding-bottom: 100px;

    @media (max-width: 700px) {
        flex-direction: column;
        border-top: none;
        border-bottom: none;
        padding-top: 56px;
        padding-bottom: 56px;
    }

    div.feature-card {
        width: 30%;

        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        div.header {
            display: flex;
            flex-direction: column;
            align-items: center;
            svg {
                height: 128px;
            }

            h4 {
                font-size: 2em;
                text-align: center;
                margin-top: 1.5em;
            }
        }

        p {
            color: #a9a7a7;
            line-height: 32px;
            text-align: center;
            font-size: 1.25em;
            margin-top: 8px;
            font-weight: normal;
        }

        /* @media (max-width: 1090px) {
            width: 32%;
        } */

        @media (max-width: 1200px) {
            /* width: 100%;
            background: #292f33;
            border-radius: 16px;
            margin-bottom: 1em;
            padding: 24px 16px; */

            div.header {
                svg {
                    height: 100px;
                }
                h4 {
                    margin-top: 1em;
                    font-weight: bold;
                    font-size: 1.6em;
                    line-height: 33px;
                }
            }
        }

        @media (max-width: 1000px) {
            width: 28%;

            div.header {
                svg {
                    height: 80px;
                }
                h4 {
                    margin-top: 1em;
                    font-weight: bold;
                    font-size: 1.4em;
                    line-height: 33px;
                }
                p {
                    font-size: 1em;
                }
            }
        }

        @media (max-width: 700px) {
            width: 100%;
            background: #292f33;
            border-radius: 16px;
            margin-bottom: 1em;
            padding: 24px 16px;

            div.header {
                svg {
                    height: 64px;
                }
                h4 {
                    margin-top: 1em;
                    font-weight: bold;
                    font-size: 1.25em;
                    line-height: 33px;
                }
            }

            p {
                font-size: 16px;
                line-height: 25px;
                text-align: center;
                margin-top: 10px;
            }
        }

        /* @media (max-width: 1030px) {
            width: 30%;

            div.header {
                margin-bottom: 12px;
                svg {
                    height: 24px;
                }

                h4 {
                    font-size: 1.2em;
                    margin-left: 6px;
                }
            }
        }

        @media (max-width: 900px) {
            width: 45%;

            &:last-child {
                margin-top: 1.5em;
            }

            div.header {
                margin-bottom: 12px;
                svg {
                    height: 24px;
                }

                h4 {
                    font-size: 1.2em;
                    margin-left: 6px;
                }
            }
        }

        @media (max-width: 900px) {
            width: 100%;

            margin-top: 1.8em;

            &:first-child {
                margin-top: 0;
            }
            p {
                font-size: 14px;
            }
            div.header {
                margin-bottom: 8px;
                svg {
                    height: 24px;
                }

                h4 {
                    font-size: 1.2em;
                    margin-left: 6px;
                }
            }
        } */
    }
`;
