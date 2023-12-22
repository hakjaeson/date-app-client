import React, { useEffect, useState } from "react";
import { Anniversary } from "../../styles/diarystyles/mainpage/mainpagestyle";

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
      <span>우리 사귄지 : {days}일</span>
    </Anniversary>
  );
};

export default AnniversaryContent;
