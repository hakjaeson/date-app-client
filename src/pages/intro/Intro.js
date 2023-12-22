import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IntroLogo,
  IntroTitle,
  IntroWrapper,
  IntroMain,
} from "../../styles/diarystyles/intro/introstyle";

// 로그인 페이지 자동 화면 전환 (3초)
const intro = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <IntroWrapper>
      <IntroMain>
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
