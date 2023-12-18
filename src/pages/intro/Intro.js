import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IntroLogo,
  IntroTitle,
  IntroWrapper,
  IntroMain,
} from "../../styles/diarystyles/intro/introstyle";

const intro = () => {
  const navigate = useNavigate();
  const handleClickIntro = () => {
    navigate("/login");
  };

  return (
    <IntroWrapper>
      <IntroMain
        onClick={() => {
          handleClickIntro();
        }}
      >
        <IntroLogo>
          <img src={`${process.env.PUBLIC_URL}/images/logo.svg`}></img>
        </IntroLogo>
        <IntroTitle>
          <h2>찌리릿</h2>
        </IntroTitle>
      </IntroMain>
    </IntroWrapper>
  );
};

export default intro;
