import React, { useState } from "react";

const AnniversaryCalculator = () => {
  const [startDate] = useState(new Date("2022-01-01")); // 시작 날짜 설정
  const currentDate = new Date(); // 현재 날짜
  const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime()); // 밀리초 단위로 날짜 차이 계산
  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 일 단위로 변환

  return (
    <div>
      <h1>Anniversary Calculator</h1>
      <p>시작 날짜: {startDate.toDateString()}</p>
      <p>현재 날짜: {currentDate.toDateString()}</p>
      <p>{days}일 지났습니다!</p>
    </div>
  );
};

export default AnniversaryCalculator;
