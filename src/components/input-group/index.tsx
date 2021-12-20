import { FC } from "react";
import { FilledButton } from "../buttons/filledbutton";
import { InputGroupContainer } from "./style";

export const InputGroup: FC = () => {
    return (
        <InputGroupContainer>
            <input type="text" placeholder="Please enter your email address" />
            <FilledButton text="Notify Me" />
        </InputGroupContainer>
    );
};
