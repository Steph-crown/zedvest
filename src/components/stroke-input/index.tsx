import { FC } from "react";
import { FilledButton } from "../buttons/filledbutton";
import { StrokeInputContainer } from "./style";

export const StrokeInput: FC = () => {
    return (
        <StrokeInputContainer>
            <input type="text" placeholder="Enter your email address" />
            <FilledButton text="Notify Me" />
        </StrokeInputContainer>
    );
};
