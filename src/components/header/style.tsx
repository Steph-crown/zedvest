import styled from "styled-components";

export const HeaderContainer = styled.header`
    img {
        height: 26px;
        @media (max-width: 500px) {
            height: 24px;
        }
    }

    padding: 2.2em 0;
    padding-bottom: 1.8em;
    @media (max-width: 500px) {
        padding: 1.8em 0;
    }
    display: flex;
    justify-content: space-between;
    min-height: 2px;
    align-items: center;
`;
