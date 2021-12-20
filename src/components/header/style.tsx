import styled from "styled-components";

export const HeaderContainer = styled.header`
    img {
        height: 26px;
        @media (max-width: 500px) {
            height: 20px;
        }
    }

    padding: 2.5em 0;
    @media (max-width: 500px) {
        padding: 1.6em 0;
    }
    display: flex;
    justify-content: space-between;
    min-height: 2px;
    align-items: center;
`;
