import styled from "styled-components";

export const StepsContainer = styled.section`
    padding: 4em 0;
    @media (max-width: 1024px) {
        padding: 0em 0;
    }
    div.step {
        display: flex;
        justify-content: space-between;
        color: white;
        min-height: 2px;
        align-items: center;
        padding: 0 calc(0.045 * 100vw);
        @media (max-width: 1024px) {
            padding: 0em calc(0.08 * 100vw);
        }
        margin: 5em 0;

        p {
            line-height: 40px;
            margin-top: 1em;
            font-size: 1.2em;
            span {
                color: var(--theme);
            }
        }

        img.illustration {
            height: 120px;
            margin: 0 -24px;
            margin-top: -50px;
        }
        div.bg {
            width: 55%;
            position: relative;
            display: flex;
        }

        h4 {
            font-size: 1.9em;
        }

        div.sm {
            width: 45%;
            display: flex;
            justify-content: center;

            img.image {
                width: 60%;
            }
        }

        &:nth-child(2) {
            flex-direction: row-reverse;

            div.bg {
                flex-direction: row-reverse;

                & > div {
                    margin-right: -24px;
                }

                img.illustration {
                    /* height: 120px; */
                    margin: 0 0px;
                    margin-top: -50px;
                }
            }
        }

        @media (max-width: 1024px) {
            flex-direction: column;

            margin: 3em 0;

            div.sm {
                width: 100%;

                img.image {
                    width: 100%;
                    margin: 1em 0;
                }
            }

            div.bg {
                width: 100%;

                flex-direction: column;
                img.illustration {
                    height: 150px;
                    width: 150px;
                    object-fit: contain;
                    margin: 0 0px;
                    margin-top: 0px;
                }

                p {
                    font-size: 1em;
                }

                h4 {
                    font-size: 1.4em;
                }
            }

            &:nth-child(2) {
                width: 100%;

                flex-direction: column !important;
                img.illustration {
                    height: 150px;
                    width: 150px;
                    object-fit: contain;
                    margin: 0 0px;
                    margin-top: 0px;
                }

                p {
                    font-size: 1em;
                }

                h4 {
                    font-size: 1.4em;
                }

                div.bg {
                    width: 100%;

                    flex-direction: column;
                    img.illustration {
                        height: 150px;
                        width: 150px;
                        object-fit: contain;
                        margin: 0 0px;
                        margin-top: 0px;
                    }

                    p {
                        font-size: 1em;
                    }

                    h4 {
                        font-size: 1.4em;
                    }
                }
            }
        }
    }
`;
