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
                        data-aos="fade-up"
                    />
                    <div>
                        <h4 data-aos="fade-up">
                            Now you know where your money goes
                        </h4>
                        <p data-aos="fade-up">
                            Ever wondered what is taking all your money? No need
                            to wonder! <span>Track your expenses</span> and
                            earnings with the Zedvest app. Now you can plan,
                            save and cut down and those tiny spendings that keep
                            taking your money without you knowing.
                        </p>
                    </div>
                </div>
                <div className="sm">
                    <img
                        src={stepImage2}
                        alt="Imag"
                        data-aos="zoom-in"
                        className="image"
                    />
                </div>
            </div>
            <div className="step">
                <div className="bg">
                    <img
                        src={illustration2}
                        alt="Icon"
                        className="illustration"
                        data-aos="fade-up"
                    />
                    <div>
                        <h4 data-aos="fade-up">
                            Your financial advisor powered by AI
                        </h4>
                        <p data-aos="fade-up">
                            Zedvest uses <span>artificial intelligence</span> to
                            give periodic reports and feedback on your spending
                            and saving culture to make sure you keep up with
                            your goals whether in spending or saving. Get proven
                            tips on how to make the most of your savings and
                            keep your spending in check.
                        </p>
                    </div>
                </div>
                <div className="sm">
                    <img
                        src={stepImage1}
                        alt="Imag"
                        data-aos="zoom-in"
                        className="image"
                    />
                </div>
            </div>
            <div className="step">
                <div className="bg">
                    <img
                        src={illustration3}
                        alt="Icon"
                        className="illustration"
                        data-aos="fade-up"
                    />
                    <div>
                        <h4 data-aos="fade-up">
                            Send and Receive money from anywhere on the planet
                        </h4>
                        <p data-aos="fade-up">
                            <span>Wondering how to send urgent funds</span> to
                            your siblings back home without having to pay crazy
                            charges? Zedvest is the ultimate answer. Send money
                            in an instant to loved ones without fear of losing
                            money due to transaction restrictions or paying
                            heavy fees.
                        </p>
                    </div>
                </div>
                <div className="sm">
                    <img
                        src={stepImage3}
                        alt="Imag"
                        data-aos="zoom-in"
                        className="image"
                    />
                </div>
            </div>
        </StepsContainer>
    );
};
