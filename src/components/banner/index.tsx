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
                    <h6 data-aos="fade-up">
                        <Hyphen /> Coming soon
                    </h6>
                    <h1 data-aos="fade-up">
                        There is a new way to handle money.
                    </h1>
                    <p data-aos="fade-up">
                        Be the first to know when we launch
                    </p>
                    <InputGroup />
                </div>
                <div className="right" data-aos="zoom-in">
                    <img src={BannerImage} alt="Pay" />
                </div>
            </div>
        </BannerContainer>
    );
};
