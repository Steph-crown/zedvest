import { FC } from "react";
import { Header } from "../header";
import { BannerContainer } from "./style";

export const Banner: FC = () => {
    return (
        <BannerContainer>
            <Header />
        </BannerContainer>
    );
};
