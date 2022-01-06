import { FeatureContainer } from "./style";
import { ReactComponent as Security } from "./../../assets/security.svg";
import { ReactComponent as Privacy } from "./../../assets/privacy.svg";
import { ReactComponent as Learn } from "./../../assets/learn.svg";

export const Features = () => {
    return (
        <FeatureContainer>
            <div className="feature-card" data-aos="fade-up">
                <div className="header">
                    <Learn />
                    <h4>Learn as you Bank.</h4>
                </div>
                <p>
                    Gain understanding to your spending and money management
                    behaviour and find ways to improve on it.
                </p>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="header">
                    <Security />
                    <h4>Security Encryption.</h4>
                </div>
                <p>
                    Not only can you save smartly, you can be rest assured of
                    your assests being secure.
                </p>
            </div>
            <div className="feature-card" data-aos="fade-up">
                <div className="header">
                    <Privacy />
                    <h4>Privacy Protection.</h4>
                </div>
                <p>
                    Your information and assest details are safe and will not be
                    shared without your permission.
                </p>
            </div>
        </FeatureContainer>
    );
};
