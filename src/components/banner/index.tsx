import { FC } from "react";
import { Header } from "../header";
import { BannerContainer } from "./style";
import BannerImage from "./../../assets/banner-image.png";
import { ReactComponent as Hyphen } from "./../../assets/hyphen.svg";
import { InputGroup } from "../input-group";

export const Banner: FC = () => {
    return (
        <BannerContainer>
            <Header />
            <div className="banner-flex">
                <div className="left">
                    <h6>
                        <Hyphen /> Coming soon
                    </h6>
                    <h1>There is a new way to handle money.</h1>
                    <p>Be the first to know when we launch</p>
                    <InputGroup />
                </div>
                <div className="right">
                    <img src={BannerImage} alt="Pay" />
                </div>
            </div>
        </BannerContainer>
    );
};
