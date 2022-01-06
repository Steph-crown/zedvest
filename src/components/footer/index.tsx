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
import { ReactComponent as Linkedin } from "./../../assets/linkedin.svg";
import { ReactComponent as Twitter } from "./../../assets/twitter.svg";
import { ReactComponent as Instagram } from "./../../assets/instagram.svg";
import { ReactComponent as Mail } from "./../../assets/mail.svg";
import Logo from "./../../assets/logo.png";
import styled from "styled-components";

export const Footer: FC = () => {
    return (
        <Container>
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
                    <h4>Sign up for early access</h4>
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
                className="end"
            >
                <img src={Logo} alt="Logo" className="logo" />

                <a
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: "14px",
                        textDecoration: "none",
                        display: "block",
                        margin: "auto",
                    }}
                    href="mailto:support@zedvest.com"
                >
                    Contact: support@zedvest.com
                </a>
                <div className="socials">
                    <a
                        href="mailto:hello@zedvest.com"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <Mail />
                    </a>
                    <a
                        href="https://twitter.com/zedvest"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <Twitter />
                    </a>{" "}
                    <a
                        href="https://www.linkedin.com/company/zedvest-tech"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <Linkedin />
                    </a>{" "}
                    <a
                        href="https://www.instagram.com/zedvest_app"
                        target={"_blank"}
                        rel="noreferrer"
                    >
                        <Instagram />
                    </a>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    img.logo {
        height: 80px;
        @media (max-width: 500px) {
            height: 40px;
        }
    }
    div.end {
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-height: 2px;
        align-items: center;

        @media (max-width: 800px) {
            flex-direction: column;
        }
    }
    div.socials {
        display: flex;
        justify-content: flex-end;
        min-height: 2px;
        align-items: center;
        a {
            margin-left: 8px;
        }
        svg {
            height: 40px;
        }
    }
`;
