import { FC } from "react";
import { Banner } from "../../components/banner";
import { Features } from "../../components/features";
import { HomePageContainer } from "./style";
import {Steps} from "./../../components/steps"

export const Homepage: FC = () => {
    return (
        <HomePageContainer>
            <Banner />
            <Features />
            <Steps />
        </HomePageContainer>
    );
};
