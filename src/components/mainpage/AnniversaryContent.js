import React, { useEffect, useState } from "react";
import {
  Anniversary,
  MainPageLogo,
  MainPageLogoWrapper,
  StartAtWrapper,
} from "../../styles/diarystyles/mainpage/mainpagestyle";

const AnniversaryContent = ({ data }) => {
  const test = new Date(data[0]?.startedAt);

  const nowDate = new Date();

  const timeDiff = Math.abs(nowDate.getTime() - test.getTime()); // 밀리초 단위로 날짜 차이 계산
  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 일

  return (
    <Anniversary>
      <MainPageLogoWrapper>
        <MainPageLogo src={`${process.env.PUBLIC_URL}/images/logo_white.svg`} />
      </MainPageLogoWrapper>

      <StartAtWrapper>
        <span>+ {days}</span>
      </StartAtWrapper>
    </Anniversary>
  );
};

export default AnniversaryContent;
