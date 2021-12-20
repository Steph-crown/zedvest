import { FC } from "react";
import { ButtonProps } from "../types";
import { FilledButtonContainer } from "./style";

export const FilledButton: FC<ButtonProps> = ({ text }) => {
    return (
        <FilledButtonContainer>
            <div className="text"> {text}</div>
        </FilledButtonContainer>
    );
};
