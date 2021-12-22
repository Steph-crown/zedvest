import { FC } from "react";
import { InputGroup } from "../input-group";
import { FooterContainer } from "./style";
import comment1 from "./../../assets/comment1.png";
import comment2 from "./../../assets/comment2.png";
import comment3 from "./../../assets/comment3.png";
import comment4 from "./../../assets/comment4.png";
import memoji1 from "./../../assets/memoji1.png";
import memoji2 from "./../../assets/memoji2.png";
import memoji3 from "./../../assets/memoji3.png";

export const Footer: FC = () => {
    return (
        <>
            {" "}
            <FooterContainer>
                <img src={comment1} alt="" className="com1 c" />
                <img src={comment2} alt="" className="com2 c" />
                <img src={comment3} alt="" className="com3 c" />
                <img src={comment4} alt="" className="com4 c" />
                <img src={memoji1} alt="" className="mem m1" />
                <img src={memoji2} alt="" className="mem m2" />
                <img src={memoji3} alt="" className="mem m3" />

                <section className="pre-footer">
                    <h2>Build a financially stable future with ZedVest</h2>
                    <h6>
                        Your financial freedom is now in the palm of your hands.
                    </h6>
                    <h4>Sign Up for early access</h4>
                    <div className="input-group">
                        <InputGroup />
                    </div>

                    {/* <img src={Shadow} alt="" className="abs-shadow" /> */}
                </section>
                <div className="empty"></div>
            </FooterContainer>
            <div
                style={{
                    background: "black",
                    padding: "20px calc(0.08 * 100vw)",
                }}
            >
                <p
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: "14px",
                    }}
                >
                    Contact: support@zedvest.com
                </p>
            </div>
        </>
    );
};
