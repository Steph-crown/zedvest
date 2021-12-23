import { FC } from "react";
import { FilledButton } from "../buttons/filledbutton";
import { InputGroupContainer } from "./style";

export const InputGroup: FC = () => {
    return (
        <InputGroupContainer>
            <input type="text" placeholder="Enter your email address" />
            <FilledButton text="Notify Me" />
        </InputGroupContainer>
    );
};
