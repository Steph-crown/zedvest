import { FC } from "react";
import { StepsContainer } from "./style";
import stepImage1 from "./../../assets/step-image1.png";
import stepImage2 from "./../../assets/step-image2.png";
import stepImage3 from "./../../assets/step-image3.png";

import illustration1 from "./../../assets/illustration1.png";
import illustration2 from "./../../assets/illustration2.png";
import illustration3 from "./../../assets/illustration3.png";

export const Steps: FC = () => {
    return (
        <StepsContainer>
            <div className="step">
                <div className="bg">
                    <img
                        src={illustration1}
                        alt="Icon"
                        className="illustration"
                    />
                    <div>
                        <h4>Now you know where your money goes</h4>
                        <p>
                            Ever wondered what is taking all your money? No need
                            to wonder! <span>Track your expenses</span> and
                            earnings with the Zedvest app. Now you can plan,
                            save and cut down and those tiny spendings that keep
                            taking your money without you knowing.
                        </p>
                    </div>
                </div>
                <div className="sm">
                    <img src={stepImage2} alt="Imag" className="image" />
                </div>
            </div>
            <div className="step">
                <div className="bg">
                    <img
                        src={illustration2}
                        alt="Icon"
                        className="illustration"
                    />
                    <div>
                        <h4>Now you know where your money goes</h4>
                        <p>
                            Ever wondered what is taking all your money? No need
                            to wonder! <span>Track your expenses</span> and
                            earnings with the Zedvest app. Now you can plan,
                            save and cut down and those tiny spendings that keep
                            taking your money without you knowing.
                        </p>
                    </div>
                </div>
                <div className="sm">
                    <img src={stepImage1} alt="Imag" className="image" />
                </div>
            </div>
            <div className="step">
                <div className="bg">
                    <img
                        src={illustration3}
                        alt="Icon"
                        className="illustration"
                    />
                    <div>
                        <h4>Now you know where your money goes</h4>
                        <p>
                            Ever wondered what is taking all your money? No need
                            to wonder! <span>Track your expenses</span> and
                            earnings with the Zedvest app. Now you can plan,
                            save and cut down and those tiny spendings that keep
                            taking your money without you knowing.
                        </p>
                    </div>
                </div>
                <div className="sm">
                    <img src={stepImage3} alt="Imag" className="image" />
                </div>
            </div>
        </StepsContainer>
    );
};
