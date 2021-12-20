import styled from "styled-components";

export const CrossButtonContainer = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background: var(--theme);
    border-radius: 24px;
    color: white;
    font-weight: 500;
    width: 100px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    div.text {
        position: relative;
        z-index: 10;
        cursor: pointer;
        outline: none;
        border: none;
        background: var(--theme);
        border-radius: 24px;
        color: white;
        font-weight: 500;
        width: 100px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }

    div.cross {
        border: 1px solid white;
        width: 100px;
        height: 36px;
        position: absolute;
        border-radius: 24px;
        transform: rotate(-15deg);
        transition: transform 1s;
        z-index: 0;
    }

    &:hover {
        div.cross {
            transform: rotate(0deg);
        }
    }

    @media (max-width: 500px) {
        height: 36px;
        div.cross {
            height: 36px;
        }
        div.text {
            height: 36px;
            font-size: 14px;
        }
    }
`;
