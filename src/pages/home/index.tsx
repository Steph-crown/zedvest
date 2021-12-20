import { FC } from "react";
import { Banner } from "../../components/banner";
import { HomePageContainer } from "./style";

export const Homepage: FC = () => {
    return (
        <HomePageContainer>
            <Banner />
        </HomePageContainer>
    );
};
