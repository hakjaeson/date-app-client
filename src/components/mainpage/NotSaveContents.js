import React from "react";
import { EmptyWrapper } from "../../styles/diarystyles/mainpage/mainpagestyle";

const NotSaveContents = () => {
  return (
    <EmptyWrapper>
      <img src={process.env.PUBLIC_URL + `/images/non_save.png`} />
    </EmptyWrapper>
  );
};

export default NotSaveContents;
