import React, { useEffect, useState } from "react";
import {
  Anniversary,
  MainPageLogo,
  MainPageLogoWrapper,
  StartAtWrapper,
} from "../../styles/diarystyles/mainpage/mainpagestyle";
import { HeaderWapper } from "../../styles/diarystyles/profilepage/headerstyle";

const AnniversaryContent = ({ user }) => {
  const [days, setDays] = useState(-1);

  const startDate = new Date(user.startedAt);
  const nowDate = new Date();

  useEffect(() => {
    const savedDaysStr = sessionStorage.getItem("savedDays");

    if (savedDaysStr) {
      const savedDays = parseInt(savedDaysStr, 10);
      setDays(savedDays);
    } else {
      const timeDiff = Math.abs(nowDate.getTime() - startDate.getTime());
      const caldays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDays(caldays);
      sessionStorage.setItem("savedDays", caldays.toString());
    }
  }, [startDate, nowDate]);

  // console.log("user Info ", user);

  if (days === -1) {
    return (
      <Anniversary>
        <span>데이터 로딩 중...</span>
      </Anniversary>
    );
  }

  return (
    <Anniversary>
      <MainPageLogoWrapper>
        <MainPageLogo src={`${process.env.PUBLIC_URL}/images/logo.svg`} />
      </MainPageLogoWrapper>
      <StartAtWrapper>
        <span>D + {days}</span>
      </StartAtWrapper>
    </Anniversary>
  );
};

export default AnniversaryContent;
