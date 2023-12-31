import React from "react";
import { EmptyWrapper } from "../../styles/diarystyles/mainpage/mainpagestyle";

const EmptyContent = () => {
  return (
    <EmptyWrapper>
      <img src={process.env.PUBLIC_URL + `/images/empty_contents.png`} />
    </EmptyWrapper>
  );
};

export default EmptyContent;
