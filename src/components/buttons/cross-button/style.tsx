import styled from "styled-components";

export const CrossButtonContainer = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    background: var(--theme);
    border-radius: 24px;
    color: white;
    font-weight: 500;
    width: 180px;
    height: 55px;
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
        width: 180px;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
    }

    div.cross {
        border: 1px solid white;
        width: 180px;
        height: 55px;
        position: absolute;
        border-radius: 24px;
        /* transform: rotate(-15deg); */
        transition: transform 1s;
        z-index: 0;
        animation: turn;
        animation-duration: 7s;
        animation-iteration-count: infinite;
    }

    @keyframes turn {
        0% {
            transform: rotate(0deg);
        }
        20% {
            transform: rotate(15deg);
        }
        40% {
            transform: rotate(0deg);
        }
        60% {
            transform: rotate(-15deg);
        }
        80% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(15deg);
        }
    }

    &:hover {
        div.cross {
            transform: rotate(0deg);
        }
    }
    @media (max-width: 600px) {
        &,
        & div.cross,
        & div.text {
            width: 140px;
        }
    }

    @media (max-width: 500px) {
        height: 55px;
        div.cross {
            height: 55px;
        }
        div.text {
            height: 55px;
            font-size: 14px;
        }
    }
`;
