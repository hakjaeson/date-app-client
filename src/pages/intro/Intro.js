import React from "react";
import {
  IntroWrapper,
  Main,
  IntroLogo,
  IntroTitle,
} from "../../styles/diarystyles/intro/introstyle";

const intro = () => {
  return (
    <IntroWrapper>
      <Main>
        <IntroLogo>
          <img src="https://picsum.photos/300/300"></img>
        </IntroLogo>
        <IntroTitle>
          <h2>찌리릿</h2>
        </IntroTitle>
      </Main>
    </IntroWrapper>
  );
};

export default intro;
