import React from "react";
import { Anniversary } from "../../styles/diarystyles/mainpage/mainpagestyle";

const AnniversaryContent = ({ user }) => {
  const startDateFunction = user => {
    const startDate = user.startAt;
    const nowDate = new Date();
    const timeDifferent = Math.abs(nowDate.getTime() - startDate.getTime());
    const dPlusDay = Math.ceil(timeDifferent / (1000 * 60 * 60 * 24));
    return dPlusDay;
  };
  console.log("user Info ", user);
  return <Anniversary>{/* {startDateFunction} */}</Anniversary>;
};

export default AnniversaryContent;
