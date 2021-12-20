import { FC } from "react";
import { ButtonProps } from "../types";
import { CrossButtonContainer } from "./style";

export const CrossButton: FC<ButtonProps> = ({ text }) => {
    return (
        <CrossButtonContainer>
            <div className="text"> {text}</div>
            <div className="cross"></div>
        </CrossButtonContainer>
    );
};
