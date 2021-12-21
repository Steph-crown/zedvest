import { FeatureContainer } from "./style";
import { ReactComponent as Chart } from "./../../assets/chart.svg";
import { ReactComponent as Lock } from "./../../assets/lock.svg";
import { ReactComponent as Shield } from "./../../assets/shield.svg";

export const Features = () => {
    return (
        <FeatureContainer>
            <div className="feature-card" data-aos="fade-up">
                <div className="header">
                    <Shield />
                    <h4>Security Education</h4>
                </div>
                <p>
                    Not only can you save smartly, you can save rest assured of
                    your assests being secure.
                </p>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="header">
                    <Chart />
                    <h4>Learn as you bank</h4>
                </div>
                <p>
                    Gain understanding to your spending and money management
                    behaviour and find ways to improve on it.
                </p>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="header">
                    <Lock />
                    <h4>Privacy Protection</h4>
                </div>
                <p>
                    Your information and assest details are safe and will not be
                    shared without your permission.
                </p>
            </div>
        </FeatureContainer>
    );
};
