import { FC } from "react";
import { Header } from "../header";
import { BannerContainer } from "./style";
// import BannerImage from "./../../assets/banner-image.png";
// import { InputGroup } from "../input-group";
import RoundAvatars from "./../../assets/avatar-round.png";
import { StrokeInput } from "../stroke-input";

export const Banner: FC = () => {
    return (
        <BannerContainer>
            <div style={{ padding: "0 calc(0.08 * 100vw)" }}>
                <Header />{" "}
            </div>
            <div className="banner">
                <img
                    src={RoundAvatars}
                    alt="Avatars"
                    className="avatar-round"
                />
                <div className="banner-flex">
                    <div className="center">
                        {/* <h6 data-aos="fade-up">
                            <Hyphen /> Coming soon
                        </h6> */}
                        <h1 data-aos="fade-up">
                            There is a new way to handle money.
                        </h1>
                        <p data-aos="fade-up">
                            Zedvest uses <span>artificial intelligence</span> to
                            give periodic reports and feedback on your spending
                            and saving culture to make sure you keep up with
                            your goals whether in spending or saving. Get proven
                            tips on how to make the most of your savings and
                            keep your spending in check
                        </p>
                        <p data-aos="fade-up" className="launch">
                            Be the first to know when we launch
                        </p>
                        <StrokeInput />
                    </div>
                    {/* <div className="right" data-aos="zoom-in">
                    <img src={BannerImage} alt="Pay" />
                </div> */}
                </div>
            </div>
        </BannerContainer>
    );
};
