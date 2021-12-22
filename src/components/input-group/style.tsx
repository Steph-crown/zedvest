import styled from "styled-components";

export const InputGroupContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: #e5e5e5;
    /* height: 80px; */
    border-radius: 48px;
    max-width: 450px;
    align-items: center;
    justify-content: space-between;
    padding: 0.9em 0;
    padding-right: 0.9em;
    input {
        outline: none;
        border: none;
        background: transparent;
        padding: 0 24px;
        flex: 1;
        width: 100%;
        font-size: 18px;
        caret-color: var(--theme);
        color: #666666;

        &::placeholder {
            color: #a9a7a7;
            opacity: 1;
            font-size: 13px;
        }

        &::-ms-input-placeholder {
            color: #a9a7a7;
        }
        &:-ms-input-placeholder {
            color: #a9a7a7;
        }
    }
    button {
        height: 40px;
        width: 150px;
    }

    @media (max-width: 500px) {
        padding: 0.6em 0;
        padding-right: 0.6em;
        input {
            font-size: 14px;
            padding: 0 16px;
        }
        button {
            height: 40px;
            width: 120px;

            div.text {
                font-size: 12px;
            }
        }
    }
`;
