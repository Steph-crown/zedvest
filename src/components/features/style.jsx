import styled from "styled-components";

export const FeatureContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid #fca400;
    padding-top: 24px;
    padding-bottom: 24px;
 
    div.feature-card {
        width: 28%;
        color: white;
        div.header {
            display: flex;
            min-height: 2px;
            align-items: center;
            margin-bottom: 16px;
            svg {
                height: 32px;
            }

            h4 {
                font-size: 1.5em;
                margin-left: 8px;
            }
        }

        p {
            color: #a9a7a7;
            line-height: 32px;
        }

        @media (max-width: 1090px) {
            width: 32%;
        }

        @media (max-width: 1030px) {
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
        }
    }
`;
