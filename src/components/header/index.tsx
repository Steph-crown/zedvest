import { FC } from "react";
import { HeaderContainer } from "./style";
import Logo from "./../../assets/logo.svg";
import { CrossButton } from "../buttons/cross-button";

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
            <CrossButton text="Notify me" />
        </HeaderContainer>
    );
};
